var tv             = new Array();                    //电视剧
var movie          = new Array();                    //电影
var region         = new Array();                    //地区
var film_type      = new Array();                    //影片类型
var years          = new Array();                    //年代
var year_recommend = new Array();                    //年度推荐
var hot            = new Array();                    //热议

tv = [{
    title: "著名系列",
    group: [{
        title: "著名超高分电视剧(8.6分+)",
        path: "list/tv/all/all/8.6/10/50000/0/0"
    },
    {
        title: "著名高分电视剧(8分~8.5分)",
        path: "list/tv/all/all/8/8.5/50000/0/0"
    },
    {
        title: "著名中高分电视剧(7分~7.9分)",
        path: "list/tv/all/all/7/7.9/50000/0/0"
    }]
},
{
    title: "知名系列",
    group: [{
        title: "知名超高分电视剧(8.6分+)",
        path: "list/tv/all/all/8.6/10/20000/49999/0"
    },
    {
        title: "知名高分电视剧(8分~8.5分)",
        path: "list/tv/all/all/8/8.5/20000/49999/0"
    },
    {
        title: "知名中高分电视剧(7分~7.9分)",
        path: "list/tv/all/all/7/7.9/20000/49999/0"
    }]
},
{
    title: "小众系列",
    group: [{
        title: "小众超高分电视剧(8.6分+)",
        path: "list/tv/all/all/8.6/10/5000/19999/0"
    },
    {
        title: "小众高分电视剧(8.2分~8.5分)",
        path: "list/tv/all/all/8.2/8.5/5000/19999/0"
    },
    {
        title: "小众中高分电视剧(7.8分~8.1分)",
        path: "list/tv/all/all/7.8/8.1/5000/19999/0"
    }]
},
{
    title: "冷门系列",
    group: [{
        title: "冷门超高分电视剧(8.8分+)",
        path: "list/tv/all/all/8.8/10/1000/4999/0"
    },
    {
        title: "冷门高分电视剧(8.4分~8.7分)",
        path: "list/tv/all/all/8.4/8.7/1000/4999/0"
    },
    {
        title: "冷门中高分电视剧(8分~8.3分)",
        path: "list/tv/all/all/8/8.3/1000/4999/0"
    }]
},
{
    title: "无名系列",
    group: [{
        title: "无名超高分电视剧(8.8分+)",
        path: "list/tv/all/all/8.8/10/0/999/0"
    },
    {
        title: "无名高分电视剧(8.4分~8.7分)",
        path: "list/tv/all/all/8.4/8.7/0/999/0"
    },
    {
        title: "无名中高分电视剧(8分~8.3分)",
        path: "list/tv/all/all/8/8.3/0/999/0"
    }]
}];

movie = [{
    title: "著名系列",
    group: [{
        title: "著名超高分电影(8.6分+)",
        path: "list/movies/all/all/8.6/10/60000/0/0"
    },
    {
        title: "著名高分电影(8分~8.5分)",
        path: "list/movies/all/all/8/8.5/60000/0/0"
    },
    {
        title: "著名中高分电影(7分~7.9分)",
        path: "list/movies/all/all/7/7.9/60000/0/0"
    }]
},
{
    title: "知名系列",
    group: [{
        title: "知名超高分电影(8.6分+)",
        path: "list/movies/all/all/8.6/10/20000/59999/0"
    },
    {
        title: "知名高分电影(8分~8.5分)",
        path: "list/movies/all/all/8/8.5/20000/59999/0"
    },
    {
        title: "知名中高分电影(7分~7.9分)",
        path: "list/movies/all/all/7/7.9/20000/59999/0"
    }]
},
{
    title: "小众系列",
    group: [{
        title: "小众超高分电影(8.6分+)",
        path: "list/movies/all/all/8.6/10/5000/19999/0"
    },
    {
        title: "小众高分电影(8.2分~8.5分)",
        path: "list/movies/all/all/8.2/8.5/5000/19999/0"
    },
    {
        title: "小众中高分电影(7.8分~8.1分)",
        path: "list/movies/all/all/7.8/8.1/5000/19999/0"
    }]
},
{
    title: "冷门系列",
    group: [{
        title: "冷门超高分电影(8.8分+)",
        path: "list/movies/all/all/8.8/10/1000/4999/0"
    },
    {
        title: "冷门高分电影(8.4分~8.7分)",
        path: "list/movies/all/all/8.4/8.7/1000/4999/0"
    },
    {
        title: "冷门中高分电影(8分~8.3分)",
        path: "list/movies/all/all/8/8.3/1000/4999/0"
    }]
},
{
    title: "无名系列",
    group: [{
        title: "无名超高分电影(8.8分+)",
        path: "list/movies/all/all/8.8/10/0/999/0"
    },
    {
        title: "无名高分电影(8.4分~8.7分)",
        path: "list/movies/all/all/8.4/8.7/0/999/0"
    },
    {
        title: "无名中高分电影(8分~8.3分)",
        path: "list/movies/all/all/8/8.3/0/999/0"
    }]
}];

region = [{
    title: "电影",
    group: [{
        title: "中国大陆",
        path: "list/movie/中国大陆/all/7.5/10/10000/0/0"
    },
    {
        title: "台湾",
        path: "list/movie/台湾/all/7.5/10/10000/0/0"
    },
    {
        title: "香港",
        path: "list/movie/香港/all/7.5/10/10000/0/0"
    },
    {
        title: "美国",
        path: "list/movie/美国/all/7.5/10/10000/0/0"
    },
    {
        title: "英国",
        path: "list/movie/英国/all/7.5/10/10000/0/0"
    },
    {
        title: "日本",
        path: "list/movie/日本/all/7.5/10/10000/0/0"
    },
    {
        title: "韩国",
        path: "list/movie/韩国/all/7.5/10/10000/0/0"
    },
    {
        title: "其他地区",
        path: "list/movie/其他/all/7.5/10/10000/0/0"
    }]
},
{
    title: "电视剧",
    group: [{
        title: "中国大陆",
        path: "list/tv/中国大陆/all/7.5/10/10000/0/0"
    },
    {
        title: "台湾",
        path: "list/tv/台湾/all/7.5/10/10000/0/0"
    },
    {
        title: "香港",
        path: "list/tv/香港/all/7.5/10/10000/0/0"
    },
    {
        title: "美国",
        path: "list/tv/美国/all/7.5/10/10000/0/0"
    },
    {
        title: "英国",
        path: "list/tv/英国/all/7.5/10/10000/0/0"
    },
    {
        title: "日本",
        path: "list/tv/日本/all/7.5/10/10000/0/0"
    },
    {
        title: "韩国",
        path: "list/tv/韩国/all/7.5/10/10000/0/0"
    },
    {
        title: "其他地区",
        path: "list/tv/其他/all/7.5/10/10000/0/0"
    }]
}];


film_type = [{
    title: "影片类型",
    group: [{
        title: "剧情",
        path: "list/all/all/剧情/7.5/10/10000/0/0"
    },
    {
        title: "战争",
        path: "list/all/all/战争/7.5/10/10000/0/0"
    },
    {
        title: "奇幻",
        path: "list/all/all/奇幻/7.5/10/10000/0/0"
    },
    {
        title: "冒险",
        path: "list/all/all/冒险/7.5/10/10000/0/0"
    },
    {
        title: "喜剧",
        path: "list/all/all/喜剧/7.5/10/10000/0/0"
    },
    {
        title: "动作",
        path: "list/all/all/动作/7.5/10/10000/0/0"
    },
    {
        title: "科幻",
        path: "list/all/all/科幻/7.5/10/10000/0/0"
    },
    {
        title: "悬疑",
        path: "list/all/all/悬疑/7.5/10/10000/0/0"
    },
    {
        title: "犯罪",
        path: "list/all/all/犯罪/7.5/10/10000/0/0"
    },
    {
        title: "爱情",
        path: "list/all/all/爱情/7.5/10/10000/0/0"
    },
    {
        title: "惊悚",
        path: "list/all/all/惊悚/7.5/10/10000/0/0"
    },
    {
        title: "灾难",
        path: "list/all/all/灾难/7.5/10/10000/0/0"
    },
    {
        title: "恐怖",
        path: "list/all/all/恐怖/7.5/10/10000/0/0"
    },
    {
        title: "武侠",
        path: "list/all/all/武侠/7.5/10/10000/0/0"
    },
    {
        title: "历史",
        path: "list/all/all/历史/7.5/10/10000/0/0"
    },
    {
        title: "家庭",
        path: "list/all/all/家庭/7.5/10/10000/0/0"
    },
    {
        title: "动画",
        path: "list/all/all/动画/7.5/10/10000/0/0"
    },
    {
        title: "儿童",
        path: "list/all/all/儿童/7.5/10/10000/0/0"
    },
    {
        title: "西部",
        path: "list/all/all/西部/7.5/10/10000/0/0"
    },
    {
        title: "古装",
        path: "list/all/all/古装/7.5/10/10000/0/0"
    },
    {
        title: "运动",
        path: "list/all/all/运动/7.5/10/10000/0/0"
    },
    {
        title: "鬼怪",
        path: "list/all/all/鬼怪/7.5/10/10000/0/0"
    },
    {
        title: "歌舞",
        path: "list/all/all/歌舞/7.5/10/10000/0/0"
    },
    {
        title: "同性",
        path: "list/all/all/同性/7.5/10/10000/0/0"
    },
    {
        title: "传记",
        path: "list/all/all/传记/7.5/10/10000/0/0"
    },
    {
        title: "短片",
        path: "list/all/all/短片/7.5/10/10000/0/0"
    },
    {
        title: "音乐",
        path: "list/all/all/音乐/7.5/10/10000/0/0"
    },
    {
        title: "记录",
        path: "list/all/all/记录/7.5/10/10000/0/0"
    },
    {
        title: "真人秀",
        path: "list/all/all/真人秀/7.5/10/10000/0/0"
    },
    {
        title: "脱口秀",
        path: "list/all/all/脱口秀/7.5/10/10000/0/0"
    },
    {
        title: "情色",
        path: "list/all/all/情色/7.5/10/10000/0/0"
    }]
}];

years = [{
    title: "影片年份",
    group: [{
        title: "2016",
        path: "list/all/all/all/7.5/10/20000/0/2016"
    },
    {
        title: "2015",
        path: "list/all/all/all/7.5/10/20000/0/2015"
    },
    {
        title: "2014",
        path: "list/all/all/all/7.5/10/20000/0/2014"
    },
    {
        title: "2013",
        path: "list/all/all/all/7.5/10/20000/0/2013"
    },
    {
        title: "2012",
        path: "list/all/all/all/7.5/10/20000/0/2012"
    },
    {
        title: "2011",
        path: "list/all/all/all/7.5/10/20000/0/2011"
    },
    {
        title: "2010",
        path: "list/all/all/all/7.5/10/20000/0/2010"
    },{
        title: "2009",
        path: "list/all/all/all/7.5/10/20000/0/2009"
    },
    {
        title: "2008",
        path: "list/all/all/all/7.5/10/20000/0/2008"
    },
    {
        title: "2007",
        path: "list/all/all/all/7.5/10/20000/0/2007"
    },
    {
        title: "2006",
        path: "list/all/all/all/7.5/10/20000/0/2006"
    },
    {
        title: "2005",
        path: "list/all/all/all/7.5/10/20000/0/2005"
    },
    {
        title: "2004",
        path: "list/all/all/all/7.5/10/20000/0/2004"
    },
    {
        title: "2003",
        path: "list/all/all/all/7.5/10/20000/0/2003"
    },
    {
        title: "2002",
        path: "list/all/all/all/7.5/10/20000/0/2002"
    },
    {
        title: "2001",
        path: "list/all/all/all/7.5/10/20000/0/2001"
    },
    {
        title: "2000",
        path: "list/all/all/all/7.5/10/20000/0/2000"
    },
    {
        title: "1999",
        path: "list/all/all/all/7.5/10/20000/0/1999"
    },
    {
        title: "1998",
        path: "list/all/all/all/7.5/10/20000/0/1998"
    },
    {
        title: "1997",
        path: "list/all/all/all/7.5/10/20000/0/1997"
    },
    {
        title: "1996",
        path: "list/all/all/all/7.5/10/20000/0/1996"
    },
    {
        title: "1995",
        path: "list/all/all/all/7.5/10/20000/0/1995"
    },
    {
        title: "1994",
        path: "list/all/all/all/7.5/10/20000/0/1994"
    },
    {
        title: "1993",
        path: "list/all/all/all/7.5/10/20000/0/1993"
    },
    {
        title: "1992",
        path: "list/all/all/all/7.5/10/20000/0/1992"
    },
    {
        title: "1991",
        path: "list/all/all/all/7.5/10/20000/0/1991"
    },
    {
        title: "1990",
        path: "list/all/all/all/7.5/10/20000/0/1990"
    }]
}];

year_recommend = [{
    title: "总榜",
    group: [{
        title: "豆瓣总榜",
        path: "top/score"
    },
    {
        title: "IMDB",
        path: "top/imdb_score"
    }]
},
{
    title: "年度大集合",
    group: [{
        title: "今年的电影",
        path: "list/movies/all/all/7.5/10/1/0/2017"
    },
    {
        title: "今年的电视剧",
        path: "list/tv/all/all/7.5/10/1/0/2017"
    },
    {
        title: "今年的综艺",
        path: "list/show/all/all/7.5/10/1/0/2017"
    },
    {
        title: "今年的记录片",
        path: "list/doc/all/all/7.5/10/1/0/2017"
    },
    {
        title: "今年的动画电影",
        path: "list/comicmovie/all/all/7.5/10/1/0/2017"
    },
    {
        title: "今年的动画剧集",
        path: "list/comictv/all/all/7.5/10/1/0/2017"
    }]
},
{
    title: "高分大集合",
    group: [{
        title: "高分动画电影",
        path: "list/comicmovie/all/all/7.5/10/10000/0/0"
    },
    {
        title: "高分动画剧集",
        path: "list/comictv/all/all/7.5/10/10000/0/0"
    },
    {
        title: "高分纪录片",
        path: "list/doc/all/all/7.5/10/5000/0/0"
    },
    {
        title: "高分短片",
        path: "list/short/all/all/7.5/10/1000/0/0"
    },
    {
        title: "高分综艺",
        path: "list/show/all/all/7.5/10/100/0/0"
    }]
}];

hot = [{
    title: "今日热议",
    group: [{
        title: "今日热议电影",
        path: "hot/movie"
    },
    {
        title: "今日热议电视剧",
        path: "hot/tv"
    }]
},
{
    title: "今日趋势",
    group: [{
        title: "今日评分提升的电影",
        path: "score/up/movie"
    },
    {
        title: "今日评分下降的电影",
        path: "score/down/movie"
    },
    {
        title: "今日评分提升的电视剧",
        path: "score/up/tv"
    },
    {
        title: "今日评分下降的电视剧",
        path: "score/down/tv"
    }]
},
{
    title: "年度排行榜",
    group: [{
        title: "今年最佳电影排行榜",
        path: "list/movie/all/all/7.1/10/5000/0/2017"
    },
    {
        title: "今年最佳电视剧排行榜",
        path: "list/tv/all/all/7.1/10/5000/0/2017"
    },
    {
        title: "今年最烂电影排行榜",
        path: "list/moviebad/all/all/0.1/7/5000/0/2017"
    },
    {
        title: "今年最烂电视剧排行榜",
        path: "list/tvbad/all/all/0.1/7/5000/0/2017"
    },
    {
        title: "去年最佳电影排行榜",
        path: "list/movie/all/all/7.1/10/5000/0/2016"
    },
    {
        title: "去年最佳电视剧排行榜",
        path: "list/tv/all/all/7.1/10/5000/0/2016"
    },
    {
        title: "去年最烂电影排行榜",
        path: "list/moviebad/all/all/0.1/7/5000/0/2016"
    },
    {
        title: "去年最烂电视剧排行榜",
        path: "list/tvbad/all/all/0.1/7/5000/0/2016"
    }]
}];






module.exports= { tv , movie , region , film_type , years , year_recommend , hot };