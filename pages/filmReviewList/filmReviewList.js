var app = getApp()
var currentPage = 0;    //当前页数
var topage = true;
var bug = true;

Page({
  data:{
        reviews:[],          // 数据
        currentPage : 0,    //当前页数
        loading:false ,     //是否正在加载
        notData : false     //是否还有数据
  },
  onLoad:function(){
    // 生命周期函数--监听页面加载
    currentPage = 0;
    this.getFilmReviews(currentPage)
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    wx.setNavigationBarTitle({title:"腹黑影评"})
  },
  
  //查询方法
  getFilmReviews:function(page){
      if(bug){
            bug = false;
            this.setData({loading: true});
            app.wechat.findFilmReviews(page).then(res => { 
                var item_arr = [];
                //数据是否超出限制，超出则清空            
                if(this.data.reviews.length >= 3){
                    this.setData({reviews: [] });  
                }
                //是否还有下一页
                topage =  Math.ceil(res.data.total_count / 5) - 1 <= currentPage || res.data.totalPages == 0  ? false : true;
                //是否还有数据
                var notData = topage ? false : true;
                if(res.data){
                    if(res.data.item && res.data.item.length > 0){
                        item_arr = res.data.item;
                    }
                }
                console.log(item_arr)
                this.setData({
                    reviews:this.data.reviews.concat(item_arr),
                    loading: false,
                    notData : notData
                });
                    
                currentPage++;
                bug = true;
            })
      } 
  },
  onReachBottom: function() {
        if(topage){
            this.getFilmReviews(currentPage)
        }
  },
  goReviewDetail: function(e){
      console.log(e)
      console.log("去了")
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
