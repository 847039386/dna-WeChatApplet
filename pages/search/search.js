var app = getApp()
var currentPage = 0;
var topage = true;
var bug = true;


Page({
    data: {
        movies:[],          // 数据
        inputShowed: false,
        inputVal: "",       //查询字段
        currentPage : 0,    //当前页数
        loading:false ,     //是否正在加载
        notData : false     //是否还有数据

    },
    onReady(){
   	    wx.setNavigationBarTitle({title:"搜索"})
    },
    showInput: function () {  
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function (e) {
        //初始化数据
        currentPage = 0;        
        this.setData({
            inputVal: e.detail.value,
            movies : [],
            notData : false
        });
        this.getSearch(this.data.inputVal,currentPage)       
    },
    clearInput: function () {
        console.log("clear")
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function (e) {
 
    },
    //查询方法
    getSearch(name,page){
       if(bug){
           bug = false;
            this.setData({loading: true});
            app.fitvdna.searchApi(name,page).then(res => {
                if(this.data.movies.length >= 150){
                        this.setData({movies: [] });  
                 }
                console.log(`当前${res.data.currentPage}页，总共总共${res.data.totalPages}页`)
                topage =  res.data.totalPages - 1 == currentPage || res.data.totalPages == 0  ? false : true;
                var notData = topage ? false : true;
                this.setData({
                    movies:this.data.movies.concat(res.data.movies),
                    inputShowed: false,
                    loading: false,
                    notData : notData
                });
                currentPage++;
                bug = true;
            })
       }
    },
    //下拉刷新
    onReachBottom: function() {
        if(topage){
            this.getSearch(this.data.inputVal,currentPage)
        }
    },




});