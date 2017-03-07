var app = getApp()

Page({
  data:{
    classifys : []
  },
  onLoad:function(options){
    this.setData({
      classifys : app.classify[options.accurate]
    })
  }
})


