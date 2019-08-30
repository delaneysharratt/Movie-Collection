const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//sends all movies from server-side db to app
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "movies";`;
  pool
    .query(queryText)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('Err in GET:', err);
      res.sendStatus(500);
    });
});

module.exports = router;