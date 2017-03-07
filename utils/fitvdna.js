import Promise from './es6-promise.min';
const URI='https://data.fitvdna.com/v1'

/**
 * 搜索相应的电影
 * @param  {String} name  电影名称，例如：'未来战士'
 * @param  {Objece} page  页数
 * @return {Promise}       包含抓取任务的Promise
 */


 function searchApi(name,page){
 	let url = `${URI}/10/find/${name}\/${page}`
 	return new Promise((resolve,reject)=>{
 		wx.request({
 			url:url,
 			header:{ 'Content-Type': 'application/json' },
 			success:resolve,
 			fail:reject
 		})
 	})
 }


 /**
 * 按照ID 搜索电影
 * @param  {String} id  
 * @return {Promise}       包含抓取任务的Promise
 */
 function findByIdMovie(id){
 	let url = `${URI}/detail/${id}`
 	return new Promise((resolve,reject)=>{
 		wx.request({
 			url:url,
 			header:{ 'Content-Type': 'application/json' },
 			success:resolve,
 			fail:reject
 		})
 	})
 }

 /**
 * 统一查询，有页数
 * @param  {String} path 地址  
 * @param  {number} page 页数  
 * @return {Promise}       包含抓取任务的Promise
 */
 function unityQuery(path,page){
 	let url = `${URI}/10/${path}/${page}`
 	return new Promise((resolve,reject)=>{
 		wx.request({
 			url:url,
 			header:{ 'Content-Type': 'application/json' },
 			success:resolve,
 			fail:reject
 		})
 	})
 }

  /**
 * 按时间查询票房
 * @param  {String} date 时间字符串类型。  
 * @return {Promise}       包含抓取任务的Promise
 */
function findDateBoxOffice(date){
	date = date || 0 ;
 	let url = `${URI}/cateye/${date}`
 	return new Promise((resolve,reject)=>{
 		wx.request({
 			url:url,
 			header:{ 'Content-Type': 'application/json' },
 			success:resolve,
 			fail:reject
 		})
 	})
 }

   /**
 * 按票房里的电影ID查找movie表的的ID
 * @param  {String} id 时间字符串类型。  
 * @return {Promise}   包含抓取任务的Promise
 */
function findByBoxOfficeIdToMovie(id){
 	let url = `${URI}/boxOffice/${id}`
 	return new Promise((resolve,reject)=>{
 		wx.request({
 			url:url,
 			header:{ 'Content-Type': 'application/json' },
 			success:resolve,
 			fail:reject
 		})
 	})
 }
 


 module.exports={ searchApi ,findByIdMovie ,unityQuery ,findDateBoxOffice ,findByBoxOfficeIdToMovie };

