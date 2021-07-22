import express from 'express';
import creatorRoute from './creator/creatorRoute';

var router = express.Router();

/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

router.use('/creator', creatorRoute);

module.exports = router;
