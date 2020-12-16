var connection = require('./db')

exports.selectShowNotice = function(cb){
    connection.query('SELECT * FROM article WHERE date_start_post<=date(now()) and date_end_post>=date(now())', function (error, results, fields) {
        if(error){
            console.log(error);
        }else{
            cb(results);
        }
    });
}

exports.selectAllArticlesCount = (cb)=>{
    connection.query('SELECT COUNT(*) FROM article', 
    (error, results, fields)=>{
        if(error){
            console.log(error);
        }else{
            cb(results);
        }
    })
}

exports.selectArticlesByPage = (page, cb)=>{
    page = (page-1)*10;
    let sql = 'SELECT * FROM article ORDER BY idarticle DESC LIMIT ?, 10'
    sql = 'SELECT * FROM article ORDER BY idarticle DESC'
    connection.query(sql, [page], (error, results, fields)=>{
        if(error){
            console.log(error);
        }else{
            cb(results);
        }
    })
}

exports.insertArticle = function(body, imageFile, writerEmail, cb){
    connection.query(`INSERT INTO article(title, date_start_post, date_end_post, article_img, writer_email, message) 
        VALUES (?, ?, ?, ?, ?, ?)`, 
        [body.title, body.date_start_post, body.date_end_post, imageFile, writerEmail, body.message],
        function(error, results, fields){
            if(error){
                console.log(error);
            }else{
                cb(results);
            }
        });
}

exports.deleteArticle = (id, cb)=>{
    sql = `DELETE FROM article WHERE idarticle = ${id}`;
    console.log('sql', sql)
    connection.query(sql, function(error, results, fields){
        if(error){
            console.log('DELETE ERROR');
        }else{
            cb();
        }
    })
}