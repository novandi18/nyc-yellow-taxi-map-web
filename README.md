# Yellow Taxi in New York City 2014

## Overview
This project visualizes data for yellow taxi rides in New York City for the year 2014. It is split into a frontend, developed with ReactJS, and a backend API, developed with ExpressJS.

- **Frontend** is located on the `master` branch.
- **Backend** is located on the `backend` branch.

---

## Project Structure

### Backend
- Branch: `backend`
- Framework: ExpressJS
- Data Source: NYC Open Data API

#### Environment Variables
Copy the `.env.example` file, rename it to `.env` and set the following:

- `API_ENDPOINT`: `https://data.cityofnewyork.us/resource/gkne-dk5s.json`
- `PORT`: Preferably set to `3001` to avoid conflict with frontend which runs on `3000`.

> Data for this project is sourced from [NYC Open Data API](https://dev.socrata.com/foundry/data.cityofnewyork.us/gkne-dk5s).

### Frontend
- Branch: `master`
- Framework: ReactJS

#### Environment Variables
Copy the `.env.example` file, rename it to `.env` and set the following:

- `API_ENDPOINT`: The URL to your backend API, e.g., `http://localhost:3001/api`.
  - Ensure this matches the backend’s port setup.

---

## Setup

### Prerequisites
1. Node.js and npm installed

2. Clone the Repository for Backend and change the folder name to differentiate from the frontend folder
```bash
git clone -b backend https://github.com/novandi18/nyc-yellow-taxi-map-web.git
```

3. Clone the Repository for Frontend and change the folder name to differentiate from the backend folder
```bash
git clone https://github.com/novandi18/nyc-yellow-taxi-map-web.git
```

## Backend Setup

1. Install dependencies
```bash
npm install
```

2. Run
```bash
node index
```

## Frontend Setup

1. Install dependencies
```bash
npm install
```

2. Run
```bash
npm run start
```

---

## Notes
- Ensure both frontend and backend servers are running for complete functionality.
- For any issues, consult the [NYC Open Data API Documentation](https://dev.socrata.com/foundry/data.cityofnewyork.us/gkne-dk5s).
