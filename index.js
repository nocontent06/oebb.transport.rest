import express from 'express';
import locationsRoute from './src/req/locations.js';
import journeysRoute from './src/req/journeys.js';

const app = express();
const port = 80;

// Use the locations route
app.use('/locations', locationsRoute);

// Use the journeys route
app.use('/journeys', journeysRoute);

// Start the Express server
app.listen(port, () => {
    console.log(`API is running on http://localhost:${port}`);
});
