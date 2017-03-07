var app = getApp()

Page({
  data:{
    date_time : '',
    end_date_time : new Date().toDateString(),
    movies : []
  },
  onLoad:function(){
      let today = new Date();
      let tz_month = (today.getMonth() + 1) < 10 ? "0" + (today.getMonth() + 1) : (today.getMonth() + 1)
      let tz_date = today.getDate() < 10 ? "0" + today.getDate() : today.getDate()
      this.setData({
        date_time : today.getFullYear() + "-" + tz_month + "-" + tz_date
      })
      this.getByBoxOffice()
      
  },
  getByBoxOffice :function(){
    let _this = this;  
    app.fitvdna.findDateBoxOffice(_this.data.date_time).then(res => {    
        this.setData({
            movies : res.data.movies
        })
    })
  },
  bindDateChange: function(e) {
    this.setData({
       date_time : e.detail.value
    })
    this.getByBoxOffice()
  },
  getMovie :function(e){
      let id = e.currentTarget.dataset.id;
      app.fitvdna.findByBoxOfficeIdToMovie(id).then(res => {    
          if(res.statusCode == 200){ 
              wx.navigateTo({
                url: '../detail/detail?id=' + res.data._id,
              })
          }else{
              wx.showToast({
                title: '找不到数据',
                icon: 'loading',
                duration: 1000
              })
          }
      })
  }
})


