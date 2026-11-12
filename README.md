# Movie Search

A React + TypeScript app for searching movies by keyword with the
[TMDB API](https://developer.themoviedb.org/). Click a movie card to see its
details in a modal window.

**Live demo:** _add the Vercel link here_

## Features

- Search movies by keyword
- Notification when the search query is empty or nothing is found
- Responsive grid of movie posters
- Loading indicator while the request is in progress
- Error message when the request fails
- Movie details modal with backdrop image, overview, release date and rating
- The modal closes on the close button, the Escape key or a backdrop click,
  and blocks page scrolling while it is open

## Tech stack

- [React 19](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) with React Compiler
- [axios](https://axios-http.com/) for HTTP requests
- [React Hot Toast](https://react-hot-toast.com/) for notifications
- CSS Modules and [modern-normalize](https://github.com/sindresorhus/modern-normalize)
- ESLint, Prettier, Husky and lint-staged
- [Vercel](https://vercel.com/) for deployment

## Project structure

```
src/
  components/
    App/            # owns the movies, loading, error and selected movie state
    SearchBar/      # header with the search form
    MovieGrid/      # grid of movie cards
    MovieModal/     # movie details modal rendered with a portal
    Loader/         # loading message
    ErrorMessage/   # error message
  services/
    movieService.ts # TMDB axios instance and search request
  types/
    movie.ts        # shared Movie type
  index.css         # global styles
  main.tsx          # entry point
```

## Getting started

Requirements: Node.js 24+ and npm.

1. Get an API Read Access Token in your
   [TMDB account settings](https://www.themoviedb.org/settings/api).
2. Create a `.env` file in the project root:

   ```
   VITE_TMDB_TOKEN=your_token
   ```

3. Install dependencies and start the dev server:

   ```bash
   npm install
   npm run dev
   ```

The app runs at http://localhost:5173/.

## Scripts

| Command                | Description                          |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | Start the dev server                 |
| `npm run build`        | Type-check and build for production  |
| `npm run preview`      | Preview the production build locally |
| `npm run lint`         | Run ESLint                           |
| `npm run lint:fix`     | Run ESLint and fix problems          |
| `npm run format`       | Format all files with Prettier       |
| `npm run format:check` | Check formatting with Prettier       |

A pre-commit hook runs ESLint and Prettier on staged files.

## Deployment

The app is deployed on Vercel. Every push to `main` triggers a new
production build and deploy. The `VITE_TMDB_TOKEN` environment variable
must be set in the Vercel project settings.
