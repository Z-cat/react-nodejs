var express = require('express');
var router = express.Router();
const url = require('url');
const data = require('./login.json')
/* GET users listing. */
router.Post('/', function(req, res, next) {
  console.log(url.parse(req.url,true).query.username);
  const {username,password} =url.parse(req.url,true).query
  if(username&&password){
    res.send(data)
  }else{
    res({
      "code":"error", 
      "message":"不能为空",
      "data": {}
    })
  }
  
});

module.exports = router;
