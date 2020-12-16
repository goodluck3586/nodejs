var express = require('express');
var router = express.Router();
var model = require('../models/articleDAO');

//#region 이미지 파일 처리
//파일관련 모듈
var multer = require('multer');
const { GatewayTimeout } = require('http-errors');

//파일 저장위치와 파일이름 설정
var storage = multer.diskStorage(
{
  destination: function (req, file, cb) {
    //파일이 이미지 파일이면
    if (file.mimetype == "image/jpeg" || file.mimetype == "image/jpg" || file.mimetype == "image/png") {
      console.log("이미지 파일이네요")
      cb(null, 'public/uploads/images')
      //텍스트 파일이면
    } else if (file.mimetype == "application/pdf" || file.mimetype == "application/txt" || file.mimetype == "application/octet-stream") {
      console.log("텍스트 파일이네요")
      cb(null, 'public/uploads/texts')
    }
  },
    //파일이름 설정
    filename: function (req, file, cb) {
      const date = new Date();
    cb(null, `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}-${file.originalname}`)
  }
})

//파일 업로드 모듈
var upload = multer({ storage: storage })
//#endregion

// 새로운 게시물
router.get('/write', function(req, res) {
  const date = new Date(); 
  today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
  // console.log('today', today)
  res.render('write_notice', 
  { 
    isLogin: req.session.isLogin, 
    userEmail: req.session.userEmail, 
    today: today
  });
});

// 새로운 게시물 업로드
router.post('/write', upload.single('image_file'), (req, res)=>{
  model.insertArticle(req.body, req.file.path.substring(6), req.session.userEmail, ()=>{
    // res.send('<h1>이미지 업로드 성공</h1>')
    res.redirect('/notice/list/1')
  })
})

// notice를 페이지 단위로 10개씩 보여주는 화면 만들기
router.get('/list', (req, res)=>{
  let page = req.params.page;
  console.log('page', page);
  model.selectAllArticlesCount((count)=>{
    let articles_count = count;
    console.log('articles_count', articles_count)
    model.selectArticlesByPage(page, (results)=>{
      // res.send(results)
      res.render('show_notice_list', 
      {
        results: results, 
        articles_count: articles_count,
        isLogin: req.session.isLogin,
        userEmail: req.session.userEmail
      })
    })
  })
})

// 기존 게시물 삭제
router.get('/delete/:id', function(req, res){
  model.deleteArticle(req.params.id, ()=>res.redirect('/article/list/1'))
})

// 전력 화면 
router.get('/show_power', (req, res)=>{
  res.redirect('/power.html');
})

// 디지털 게시판 화면 
router.get('/show', function(req, res){
  model.selectShowNotice((results)=>{
    // #이 붙은 img 이름 만들기
    sharpNameList = [];
    for(var i=0; i<results.length; i++){
      sharpNameList.push("#img"+results[i].idarticle);
    }

    res.render('show_notice', 
    { 
      results: results,
      results_length: results.length
    });
  })
});

module.exports = router;
