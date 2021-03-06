var express = require('express');
var router = express.Router();
var model = require('../models/usersDAO');

router.post('/login', (req, res)=>{
  if(req.body.email && req.body.pwd){
    model.selectUser(req.body.email)
      .then((results)=>{
        if(req.body.email === results[0].email && req.body.pwd === results[0].pwd){
          req.session.isLogin = true;
          req.session.userEmail = req.body.email;
          res.redirect('/')
        }else{
          res.send('<h1>로그인 실패</h1>')
        }
      })
      .catch(console.log)
  }
})

router.get('/logout', (req, res)=>{
  req.session.destroy(function(err){
    if(err)
        console.log(`req.session.destroy error : ${err}`);
    res.redirect('/');
  });
})

module.exports = router;
