var app = getApp()

Page({
  data:{
     Article:{}
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    let _id = options.id
    app.fitvdna.findByIdMovie(_id).then(res => {
       let m = res.data
       console.log(m);
       m.stars = m.stars ? m.stars.join("  /  ") : ""
       m.directors = m.directors ? m.directors.join("  /  ") : ""
       m.other_names = m.other_names ? m.other_names.join("  /  ") : ""
       m.writers = m.writers ? m.writers.join("  /  ") : ""
       const hour = Math.floor((new Date(m.increase_rate_discover_at).getTime() - new Date(m.last_increase_rate_discover_at).getTime()) / 1000 / 60 / 60); 
       if (hour) {
          m.increase_rate_discover_pass_hour = '最近' + hour + '小时';
          m.score_difference = (m.imdb_score - m.score).toFixed(1);
          m.score_difference_class = m.score_difference < 0 ? "te_red" :  "te_green";
       }
       this.setData({
         Article : m
       })
    })

  },
})
