var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.locals.connection.query('SELECT * from users', function (error, results, fields) {
   if (error) throw error;
   res.send(JSON.stringify(results));
 });
});

/* DELETE user. */
router.post('/delete', function(req, res, next) {
  res.locals.connection.query("DELETE from users where id_user = '"+req.body.id + "'", function (error, results, fields) {
      if(error) throw error;
      res.send(JSON.stringify(results));
  });
});

/* EDIT user. */
router.post('/edit', function(req, res, next) {
  res.locals.connection.query("update users set name = '"+req.body.name+"', email = '"+req.body.email+"' where id_user = '"+req.body.id+ "'", function (error, results, fields) {
      if(error) throw error;
      res.send(JSON.stringify(results));
  });
})

module.exports = router;
