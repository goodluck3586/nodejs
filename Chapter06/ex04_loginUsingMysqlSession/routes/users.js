var express = require('express');
var router = express.Router();
var model = require('../models/usersDAO');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 로그인 처리
router.post('/login', (req, res)=>{
  if(req.body.email && req.body.pwd){
    console.log('req.body: ', req.body);
    model.selectUser(req.body.email, (results)=>{
      //res.send(results[0]);
      console.log('results: ', results);
      console.log(req.body.email, results[0].email, req.body.pwd, results[0].pwd)
      if(req.body.email === results[0].email && req.body.pwd === results[0].pwd){
        //res.send('<h1>로그인 성공</h1>')
        // 로그인 성공 req.session에 기록
        req.session.isLogin = true;
        req.session.userId = req.body.email;
        res.redirect('/');
      }else{
        res.send('<h1>로그인 실패</h1>')
      }
    });
  }else{
    res.redirect('/');
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
