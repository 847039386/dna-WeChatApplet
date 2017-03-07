var app = getApp()

Page({
  data: {
    indicatorDots: false,
    vertical: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,

    movies: [],
    swipers: [],
    filmReviews: [],
    loading:false,
    notData : false,
    xop : 90 * 150
  },
 
  onLoad: function () {
    this.getRecommendMovies();
  },

 //推荐
 getRecommendMovies(){
    this.setData({ loading: true })
    app.hot.HotMovies(6,0).then(res => {
      this.setData({ movies: res.data.movies ,loading: false ,notData : true})
    })
    app.wechat.findFilmReviews(0).then(res => {
      this.setData({ 
        swipers : {
          data : res.data.item[0].content.news_item,
          update_time : res.data.item[0].update_time  
        } , 
        filmReviews: {
          data : res.data.item[1].content.news_item,
          update_time : res.data.item[1].update_time
        } ,
        loading: false ,
        notData : true,
        kkk : res.errMsg
      })
    })

    


 },
 goFireDetail: function(e){
    let data = e.currentTarget.dataset
    let content = data["content"];
    let title = data["title"];
    let author = data["author"];
    let time = new Date(parseInt(data["time"]) * 1000).toLocaleDateString()
    let filmReBox = {
        author : author,
        title : title,
        content : content,
        time : time
    } 

    app.wechat.setStorage("filmReBox",filmReBox)
    
    wx.navigateTo({
      url: '../filmReviewDetail/filmReviewDetail',
    })
  }

})
