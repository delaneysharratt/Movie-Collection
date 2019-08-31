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

//sends all movies from server-side db to app
router.get('/:id', (req, res) => {
  let idToSelect = req.params.id;
  const queryText = `SELECT * FROM "movies" WHERE "id" = $1;`;
  pool
    .query(queryText, [idToSelect])
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => {
      console.log('Err in GET:', err);
      res.sendStatus(500);
    });
});

router.put('/:id', (req, res) => {
  let idToUpdate = req.params.id;
  let title = req.body.title;
  let description = req.body.description;

  const queryText = `UPDATE "movies" SET "title" = $2, "description" = $3 WHERE "id" = $1;`;
  pool
    .query(queryText, [idToUpdate, title, description])
    .then(result => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(200);
    });
});

module.exports = router;
