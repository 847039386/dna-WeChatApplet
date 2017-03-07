// pages/filmReviewDetail/filmReviewDetail.js
var R_htmlToWxml = require('../../utils/htmlToWxml.js');
var app = getApp()
Page({
  data:{
      Article : { }
  },
  onLoad:function(){
    app.wechat.getStorage("filmReBox").then(res => {
        let title = res.data.title;
        let author = res.data.author;
        let content = res.data.content;
        let time = res.data.time;
        content = content.replace(/data-src/ig,"src"); 
        content = R_htmlToWxml.html2json(content);
        this.setData({
          Article : {
            title : title,
            author : author,
            content : content,
            time : time
          }
        })
    })  
  }
})