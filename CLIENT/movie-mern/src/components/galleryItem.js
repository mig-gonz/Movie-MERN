import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MovieContext } from './movieContext';
import '../index.css';

import Card from 'react-bootstrap/Card';

export default function GalleryItem() {
  const { movies } = useContext(MovieContext);

  /* when a gallary item is clicked on the gallery should display a 
  full window view of the selected movie. the state should be managed here and sent to gallery.js
  */

  const dateOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  };

  return (
    <ul className='d-flex flex-row flex-wrap'>
      {movies.map((movie) => (
        <Card
          style={{ width: '20rem' }}
          border='secondary'
          key={movie.id}
          className='mx-auto m-2'
          bg='dark'
        >
          <Link to={`/movies/${movie.id}`}>
            <Card.Img
              variant='top'
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className='cardImg'
            />
          </Link>
          <Card.Body>
            <Card.Title className='text-white'>{movie.title}</Card.Title>
            <Card.Subtitle className='text-muted mt-1'>
              {new Date(movie.release_date).toLocaleDateString(
                'en-US',
                dateOptions
              )}
            </Card.Subtitle>
          </Card.Body>
        </Card>
      ))}
    </ul>
  );
}
