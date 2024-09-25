import express from 'express';
import client from '../createHafasClient.js';

const router = express.Router();

// Route to get locations based on query parameter
router.get('/', async (req, res) => {
    const { query, results = 5 } = req.query; // Default to 5 results if not provided

    if (!query) {
        return res.status(400).json({ error: 'Please provide a location query' });
    }

    try {
        const locations = await client.locations(query, { results: parseInt(results) });
        res.json(locations);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch locations' });
    }
});

export default router;
