import express from 'express';
import client from '../createHafasClient.js';

const router = express.Router();
// Route to get journeys between two locations
router.get('/', async (req, res) => {
    const { from, to } = req.query;

    if (!from || !to) {
        return res.status(400).json({ error: 'Please provide both "from" and "to" locations' });
    }

    try {
        const journeys = await client.journeys(from, to);
        res.json(journeys);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch journeys' });
    }
});

export default router;
