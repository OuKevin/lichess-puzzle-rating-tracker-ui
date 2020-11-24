const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV === 'development') { require('dotenv').config(); };

const app = express();
const port = process.env.PORT || 2323;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ratings', async (req, res) => {
  const { apiToken } = process.env;
  const { numberOfDaysDisplayed } = req.query;
  try {
    const { data } = await axios.get(
      `https://qpyko3na6l.execute-api.us-east-2.amazonaws.com/non-prod/fetchHistoricalPuzzleRatings?numberOfDaysDisplayed=${numberOfDaysDisplayed}`,
      { headers: { 'x-api-key': apiToken } },
    );

    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
