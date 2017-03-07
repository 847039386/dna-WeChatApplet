var app = getApp()
var currentPage = 0;    //当前页数
var currentPath = null; //当前要获取json的地址
var topage = true;
var bug = true;
var notData = false;
var typsQuery = null;
var list_type = ""

Page({
  data:{
        movies:[],          // 数据
        currentPage : 0,    //当前页数
        loading:false ,     //是否正在加载
        notData : false     //是否还有数据
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    currentPage = 0;
    currentPath = options.path;
    list_type = options._type
    console.log(list_type)
    this.getMovies(currentPath,currentPage)
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    // wx.setNavigationBarTitle({title:"搜索"})
  },
  
  //查询方法
  getMovies:function(path,page){
      if(bug){
            bug = false;
            this.setData({loading: true});
            if(list_type == "fl"){
                this.movieFL(path,page)
            }else if(list_type == "rm"){
                this.movieRM(page)
            }else if(list_type == "douban_ry"){
                this.movieDBry(page)
            }else if(list_type == "imdb_ry"){
                this.movieIMDBry(page)
            }
      }
  },
  onReachBottom: function() {
        if(topage){
            this.getMovies(currentPath,currentPage)
        }
  },

  movieFL: function(path,page){
     app.fitvdna.unityQuery(path,page).then(res => {
         this.CL(res)       
     })              
  },
  movieRM : function(page){
     app.hot.HotMovies(10,page).then(res => {
        this.CL(res)
     }) 
  },
  movieIMDBry : function(page){
     app.hot.IMDBRYMovies(10,page).then(res => {
        this.CL(res)
     }) 
  },
  movieDBry  : function(page){
     app.hot.DBRYMovies(10,page).then(res => {
        this.CL(res)
     }) 
  },
  CL : function(res){
      console.log(res)
       if(this.data.movies.length >= 150){
            this.setData({movies: [] });  
        }
        console.log(`当前${res.data.currentPage}页，总共总共${res.data.totalPages}页`)
        topage =  res.data.totalPages - 1 <= currentPage || res.data.totalPages == 0  ? false : true;
        notData = topage ? false : true;
        this.setData({
            movies:this.data.movies.concat(res.data.movies),
            loading: false,
            notData : notData
        });
        currentPage++;
        bug = true; 
  }

  
})
