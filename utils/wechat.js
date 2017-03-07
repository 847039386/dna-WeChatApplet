import Promise from './es6-promise.min';
const URI='https://data.fitvdna.com'



function findFilmReviews(page){
 	let url = `${URI}/wechat/list/${page}`
 	return new Promise((resolve,reject)=>{
 		wx.request({
 			url:url,
 			header:{ 'Content-Type': 'application/json' },
 			success:resolve,
 			fail:reject
 		})
 	})
 }

 function detail(url){
 	return new Promise((resolve,reject)=>{
 		wx.request({
 			url:url,
 			success:resolve,
 			fail:reject
 		})
 	})
 }


function setStorage(key,value){
	return new Promise((resolve,reject)=>{
		wx.setStorage({key:key,data:value,success:resolve,fail:reject})
	})
}

//从本地缓存中异步获取指定 key 对应的内容
function getStorage(key){
	return new Promise((resolve,reject)=>{
		wx.getStorage({key:key,success:resolve,fail:reject})
	})
}









 module.exports = { findFilmReviews , setStorage , getStorage , detail };
