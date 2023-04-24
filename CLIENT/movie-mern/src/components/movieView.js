import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function MovieView({ movies }) {
  // const [movieData, setMovieData] = useState([]);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const dateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  };

  const convertRuntime = (num) => {
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours + "h " + rminutes + "m";
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=7b627fa55bf0652f8c45e9da6e8199d1&language=en-US`
    )
      .then((response) => response.json())
      .then((res) => {
        // setMovieData(res.data);
        setMovie(res);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      {/* Header */}

      <div className="">
        <a href="/" className="text-decoration-none text-white">
          <h3 className="text-white py-3 px-3">SHMOVIE FANATICS</h3>
        </a>
      </div>

      <div className="container mt-5">
        <div className="col-lg-12">
          {/* <!-- Header--> */}
          <header className="mb-4">
            {/* <!-- Movie title--> */}
            <div className="d-flex justify-content-center mb-4">
              <a
                href="/"
                className="hover:scale-110 duration-200 border text-white border-blue-500 mt-2 py-2 px-4 rounded-md mr-4 no-underline"
              >
                Home
              </a>
            </div>

            <h1 className="fw-bolder mb-1 text-white text-center">
              {movie?.title}
            </h1>
            {/* <!-- Movie release date--> */}
            <div className="text-center text-secondary fst-italic mb-2">
              {new Date(movie?.release_date).toLocaleDateString(
                "en-US",
                dateOptions
              )}
            </div>
            {/* <!-- Movie genres--> */}
            <div className="flex flex-col items-center justify-center">
              <div>
                <a href="#!" className="no-underline">
                  <ul className="flex flex-wrap justify-center">
                    {movie?.genres?.map((genre) => (
                      <li
                        className={`px-2 py-1 mr-2 bg-secondary text-light rounded-md ${
                          movie?.genres?.length < 2 ? "mx-auto" : ""
                        }`}
                        key={genre.id}
                      >
                        {genre.name}
                      </li>
                    ))}
                  </ul>
                </a>
              </div>
              <div>
                {movie?.vote_average !== 0 && (
                  <h2 className="flex items-center" style={{ color: "gold" }}>
                    <span className="p-2">
                      <FaStar />
                    </span>
                    {movie?.vote_average?.toFixed(2)}
                  </h2>
                )}
              </div>
            </div>
          </header>
        </div>
        <div className="row">
          <div className="col-lg-4">
            {/* <!-- Movie content--> */}
            <div>
              {/* <!-- Movie poster--> */}
              <div class="flex-container">
                <figure className="mb-4 flex-child">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                    alt={movie?.title}
                    className="movie-img"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-7">
            {/* <!-- Genres section--> */}
            <div className="card mb-4">
              <div className="card-header">Genres</div>
              <div className="card-body text-center">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <a href="#!" className="text-decoration-none link-dark">
                          <b>{movie?.genres?.[0]?.name}</b>
                        </a>
                      </td>
                      <td>
                        <a href="#!" className="text-decoration-none link-dark">
                          <b>{movie?.genres?.[1]?.name}</b>
                        </a>
                      </td>
                      <td>
                        <a href="#!" className="text-decoration-none link-dark">
                          <b>{movie?.genres?.[2]?.name}</b>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* <!-- Production Info Section--> */}
            <div className="card mb-4">
              <div className="card-header">Production Info</div>
              <div className="card-body">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <b>Budget:</b>
                      </td>
                      <td>
                        {movie?.budget === 0 ? (
                          <text>Not Available</text>
                        ) : (
                          <text>{"$" + movie?.budget?.toLocaleString()}</text>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Revenue:</b>
                      </td>
                      <td>
                        {movie?.revenue === 0 ? (
                          <text>Not Available</text>
                        ) : (
                          <text>{"$" + movie?.revenue?.toLocaleString()}</text>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Production Companies:</b>
                      </td>
                      <td>
                        {movie?.production_companies?.[0]?.name} |{" "}
                        {movie?.production_companies?.[1]?.name}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Run Time:</b>
                      </td>
                      <td>{convertRuntime(movie?.runtime)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* <!-- Movie overview section --> */}
            <div className="card mb-4">
              <div className="card-header">Description</div>
              <div className="card-body">
                <p>{movie?.overview}</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Comments section--> */}
        <section className="mb-5 col-lg-12">
          <div className="card bg-light">
            <div className="card-body">
              {/* <!-- Comment form--> */}
              <form className="mb-4">
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Join the discussion and leave a comment!"
                ></textarea>
              </form>
              {/* <!-- Comment with nested comments--> */}
              <div className="d-flex mb-4">
                {/* <!-- Parent comment--> */}
                <div className="flex-shrink-0">
                  <img
                    className="rounded-circle"
                    src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                    alt="..."
                  />
                </div>
                <div className="ms-3">
                  <div className="fw-bold">Commenter Name</div>
                  If you're going to lead a space frontier, it has to be
                  government; it'll never be private enterprise. Because the
                  space frontier is dangerous, and it's expensive, and it has
                  unquantified risks.
                  {/* <!-- Child comment 1--> */}
                  <div className="d-flex mt-4">
                    <div className="flex-shrink-0">
                      <img
                        className="rounded-circle"
                        src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                        alt="..."
                      />
                    </div>
                    <div className="ms-3">
                      <div className="fw-bold">Commenter Name</div>
                      And under those conditions, you cannot establish a
                      capital-market evaluation of that enterprise. You can't
                      get investors.
                    </div>
                  </div>
                  {/* <!-- Child comment 2--> */}
                  <div className="d-flex mt-4">
                    <div className="flex-shrink-0">
                      <img
                        className="rounded-circle"
                        src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                        alt="..."
                      />
                    </div>
                    <div className="ms-3">
                      <div className="fw-bold">Commenter Name</div>
                      When you put money directly to a problem, it makes a good
                      headline.
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Single comment--> */}
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img
                    className="rounded-circle"
                    src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                    alt="..."
                  />
                </div>
                <div className="ms-3">
                  <div className="fw-bold">Commenter Name</div>
                  When I look at the universe and all the ways the universe
                  wants to kill us, I find it hard to reconcile that with
                  statements of beneficence.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* FOOTER */}
      <footer class="flex justify-center">
        <div class="text-center py-4">
          <p className="text-white">
            &copy; {new Date().getFullYear()} SHMOVIE FANATICS {""}
          </p>
          <a
            href="https://github.com/hunnerrose/Movie-MERN"
            class="flex items-center text-white hover:text-gray-400 focus:text-gray-400"
          >
            <FaGithub class="mx-auto" size={25} />
          </a>
        </div>
      </footer>
    </div>
  );
}
