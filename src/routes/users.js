const express = require  ('express');
const router = express.Router();


router.get('/Users/Login', (req,res) =>{
res.render('Users/Login');
});


module.exports = router;

