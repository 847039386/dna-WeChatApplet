import Promise from './es6-promise.min';
const URI='https://data.fitvdna.com/v1'

/**
 * 热门电影
 * @return {Promise}       包含抓取任务的Promise
 */
 function HotMovies(vcount,page){
 	let url = `${URI}/${vcount}/hot/movie/${page}`
 	return new Promise((resolve,reject)=>{
 		wx.request({
 			url:url,
 			header:{ 'Content-Type': 'application/json' },
 			success:resolve,
 			fail:reject
 		})
 	})
 }

 function IMDBRYMovies(vcount,page){
 	let url = `${URI}/${vcount}/top/imdb_rate_count/${page}`
 	return new Promise((resolve,reject)=>{
 		wx.request({
 			url:url,
 			header:{ 'Content-Type': 'application/json' },
 			success:resolve,
 			fail:reject
 		})
 	})
 }

  function DBRYMovies(vcount,page){
 	let url = `${URI}/${vcount}/top/rate_count/${page}`
 	return new Promise((resolve,reject)=>{
 		wx.request({
 			url:url,
 			header:{ 'Content-Type': 'application/json' },
 			success:resolve,
 			fail:reject
 		})
 	})
 }

  module.exports= { HotMovies , IMDBRYMovies , DBRYMovies };