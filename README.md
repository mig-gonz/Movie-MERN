# MERN-Stack-App

This Project is our second milestone project for the UNLV development boot camp course. It is to be a full-stack MERN or PERN application.

---

## Shmovie Fanatics

A movie library app that allows users to search and discover all different types of movies and leave reviews.

### Features

- Users can search for specific movie titles or browse by genre.
- Users can leave reviews or ratings on specific movies.
- A specific view for clicked movies with general information about the movie

### App Description

On the main home page, there is a navbar, a sidebar, and a gallery with gallery items. By default, the gallery displays popular movie images, titles, and release years. The navbar has the logo on each view. The sidebar has a search box where users can search different movie titles, and as they search, the gallery items update accordingly. Additionally, in the sidebar, there's a button for 'Popular Movies', 'Now Playing', 'Upcoming', and 'Top Rated'. There's a banner at the top that displays the first movie or search item. The banner and gallery items each have a view more section that, upon clicking, brings users to the MovieView component, which displays more details and information about the movie. At the bottom, there's a comment section that allows users to input their name and leave a comment or review on the movie.

## Backend

This app uses Supabase for the database.

## API Documentation

The following API endpoints are available for interacting with the application:

| Endpoint                 | Description                    | Method | Route             | Handler                                          |
| ------------------------ | ------------------------------ | ------ | ----------------- | ------------------------------------------------ |
| GET /api/comments        | Retrieve all comments          | GET    | /api/comments     | Retrieve all comments using Comment.findAll()    |
| POST /api/comments       | Create a new comment           | POST   | /api/comments     | Create a new comment using Comment.create()      |
| DELETE /api/comments/:id | Delete a comment by comment_id | DELETE | /api/comments/:id | Delete the comment with the specified comment_id |

GET /api/comments:

- Description: Retrieve all comments.
- Method: GET
- Route: /api/comments
- Handler:
- Retrieve all comments using Comment.findAll()
- Send the found comments as a JSON response with status 200 if successful
- Handle any errors by sending a "Server error" response with status 500

POST /api/comments:

- Description: Create a new comment.
- Method: POST
- Route: /api/comments
- Handler:
  - Create a new comment using Comment.create() with name and text properties from the request body
  - Send the newly created comment as a JSON response with status 201 if successful
  - Handle any errors by sending a "Server error" response with status 500

DELETE /api/comments/:comment_id:

- Description: Delete a comment by comment_id.
- Method: DELETE
- Route: /api/comments/:comment_id
- Handler:
  - Delete the comment with the specified comment_id using Comment.destroy() and the where condition
  - Check if any comment was deleted, if not, send a "Comment not found" response with status 404
  - If a comment was deleted, send an empty response with status 204
  - Handle any errors by sending a "Server error" response with status 500

### Criteria for complete assignment submission

- Your application must be a full-stack application using your own front and back-end.
- Your application should use full CRUD functionality with the database.
- Your application should be a complete product.
- Your application must be deployed online using deployment sites like Heroku or Netlify.
- Effort must be spent on styling and appearance
- You should use several sensibly named components in React
- The application should have a Readme.md file in the GitHub repository that describes the inspiration for the application, how to use the application, lists the technologies used to build the application, and addresses any outstanding bugs or unfinished functionality

#

### Components

- Banner
- Comments
- Footer
- Gallery
- Gallery Item
- Genre
- Header/Genre
- Movie Overview
- Movie View
- NavBar
- Production Info
- Search Bar
- Side Bar
- TopNav

### Challenges

- Due to time constraints, we were unable to fulfill the complete CRUD criteria, with the exception of the edit/update functionality. Nonetheless, you can still add comments and delete them for your favorite movies.

### Future Features

- Users can watch movie trailers.
- Users can create and have their own profiles where they save their favorite movies.
- Users are prompted by movie-related voting polls upon opening the app.
- Users can comment on other users comments, creating threads on movie reviews.
- Like/dislike feature for comments

---

### Setup

#### Dependencies

- "@testing-library/jest-dom": "^5.16.5"
- "@testing-library/react": "^13.4.0"
- "@testing-library/user-event": "^13.5.0"
- "@trendmicro/react-sidenav": "^0.5.0"
- "@types/react": "^18.2.13"
- "@types/react-dom": "^18.2.6"
- "@types/react-router-dom": "^5.3.3"
- "axios": "^1.3.5"
- "bootstrap": "^5.2.3"
- "cors": "^2.8.5"
- "daisyui": "^2.51.5"
- "dotenv": "^16.0.3"
- "express": "^4.18.2"
- "pg": "^8.10.0"
- "pg-hstore": "^2.3.4"
- "primeicons": "^6.0.1"
- "primereact": "^9.2.3"
- "react": "^18.2.0"
- "react-bootstrap": "^2.7.4"
- "react-dom": "^18.2.0"
- "react-icons": "^4.8.0"
- "react-router-dom": "^6.10.0"
- "react-scripts": "5.0.1"
- "sequelize": "^6.31.0"
- "startbootstrap-blog-post": "^5.0.9"
- "typescript": "^5.1.3"
- "web-vitals": "^2.1.4"

After forking and cloning this application, please ensure that you have installed all the dependencies. Make sure you are in the root directory at the package.json level, then run:

```
npm i
```

and finally:

```
npm start
```

Please note that although you can cd into the server directory and run:

```
nodemon server.js
```

It will run successfully, but CRUD operations may not work. After some time, Supabase automatically turns off the database if no actions are taking place.
