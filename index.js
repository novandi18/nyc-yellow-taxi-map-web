const express = require('express');
const cors = require('cors');
const tripsRoute = require('./routes/trips');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/trips', tripsRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});