const express = require('express');
const axios = require("axios");
const router = express.Router();
const { tripQuery } = require("../config/queryBuilder")

router.get('/', async (req, res) => {
  try {
    const queryString = tripQuery(req.query);
    const apiUrl = `${process.env.API_ENDPOINT}?${queryString}`;

    const trips = await axios.get(apiUrl);

    res.status(200).json({
      message: "Trips retrieved successfully",
      data: trips.data
    });
  } catch (error) {
    console.error('Error fetching trips:', error);
    res.status(500).json({
      message: 'Failed to fetch trip data'
    });
  }
});

module.exports = router;