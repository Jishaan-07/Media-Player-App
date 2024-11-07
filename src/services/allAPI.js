import commonAPI from "./commoAPI"
import serverURL from "./serverURL"

// saveVideoAPI - post http rqst called add component



export const saveVideoAPI = async (videoDetails)=>{
    return await commonAPI("POST",`${serverURL}/uploadVideos`,videoDetails)
}

// getAllAPIVideosAPI -get http request calle view component whrn component displayed in browser inside its useeffect hook
export const getAllAPIVideosAPI = async ()=>{
    return await commonAPI("GET",`${serverURL}/uploadVideos`,"")
}

// saveHistoryApi - post http request http://localhost:3000/history called by Video card component when we play video
export const saveHistoryApi = async (historyDetails)=>{
    return await commonAPI("POST",`${serverURL}/history`,historyDetails)
}


// getAllHistoryAPI  -  get http request http://localhost:3000/history called by history component when it open in browser


export const getAllHistoryAPI = async ()=>{
    return await commonAPI("GET",`${serverURL}/history`,"")
}



// deleteHistoryAPI  -  delete http request http://localhost:3000/history/id called by history component when user click on delete button


export const deleteHistoryAPI = async (id)=>{
    return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})
}


// removeVideoAPI - delete  http rqst called videocqard component when user click on delete bttn 
export const removeVideoAPI = async (id)=>{
    return await commonAPI("DELETE",`${serverURL}/uploadVideos/${id}`,{})
}


// saveCategoryAPI - post  http rqst to http://localhost:3000/categories called by category  component when user click on add bttn 

export const saveCategoryAPI = async (categoryDetails)=>{
    return await commonAPI("POST",`${serverURL}/categories`,categoryDetails)
}


// getAllCategoryAPI - get  http rqst to json/categories called by category  component when component loaded in browser
export const getAllCategoryAPI = async ()=>{
    console.log(await commonAPI("GET",`${serverURL}/categories`,{}));
    
    return await commonAPI("GET",`${serverURL}/categories`,{})
}

// deleteCategoriesAPI  -  delete http request http://localhost:3000/history/id called by category component when user click on delete button


export const deleteCategoriesAPI = async (id)=>{
    return await commonAPI("DELETE",`${serverURL}/categories/${id}`,{})
}
// updateCategoryAPI  -  update http request http://localhost:3000/history/id called by category component when user drag on category button


export const updateCategoryAPI = async (categoryDetails)=>{
    return await commonAPI("PUT",`${serverURL}/categories/${categoryDetails.id}`,categoryDetails)
}
