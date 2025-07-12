# Full Stack Games App

A basic full stack application that displays a list of games fetched from a backend API and rendered in the UI using React.

## Tech Stack

- **Backend:** Node.js (Express)
- **Frontend:** React.js
- **HTTP Client:** Axios

## Features

- Backend API serves a list of games.
- Frontend fetches and displays games using Axios.
- Proxy setup in development to avoid CORS issues.

## How to Run

### Backend

```sh
cd Backend
npm install
npm run start
```

### Frontend

```sh
cd Frontend
npm install
npm run dev
```

## Notes

- The frontend uses a proxy (configured in `vite.config.js`) to forward API requests to the backend, avoiding CORS issues during development.
- Make sure both backend and frontend servers are running for the app to work.
