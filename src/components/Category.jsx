// rafce
import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { deleteCategoriesAPI, getAllCategoryAPI, removeVideoAPI, saveCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import VideoCard from "./VideoCard"
const Category = ({setDeleteResponseFromCategory,deleteResponseFromView}) => {

const [categoryName,setcategoryName]=useState("")
const [allCategories,setAllCategories]=useState([])
 console.log(allCategories);
 

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
  useEffect(()=>{
  getAllCategories()
  },[deleteResponseFromView])

const handleSaveCategory= async()=>{
if(categoryName){
const categoryDetails = {categoryName,allVideos:[]}
try{
const result =await saveCategoryAPI(categoryDetails)
if(result.status>=200 && result.status<300){
  alert("Category Created")
  getAllCategories()
  handleClose()
}
}catch(err){
  console.log(err);
  
}
}else{
  alert("please provide name")
}
}


const getAllCategories = async()=>{
  try{
    const  result = await getAllCategoryAPI()
    console.log(result);
    
    if(result.status>=200 && result.status<300){
      setAllCategories(result.data)
    }
  }catch(err){
    console.log(err);
    
  }
}

const removeCategories = async(id)=>{
  try{
 await deleteCategoriesAPI(id)
 getAllCategories()
  }catch(err){
    console.log(err);
    
  }
}

const dragOverCategory=(e)=>{
  e.preventDefault()
}
const videoCardDropOverCategory= async (e,categoryDetails)=>{
  console.log("Inside videoCardDropOverCategory ");
  console.log(categoryDetails);
  const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
  console.log(videoDetails);
  // update category by add video to its allVideos
  categoryDetails.allVideos.push(videoDetails)
  console.log(categoryDetails);
  // api call to  make update the category
  await updateCategoryAPI(categoryDetails)
  getAllCategories()
  const result= await removeVideoAPI(videoDetails.id)
  setDeleteResponseFromCategory(result) 
  
}

const categoryVideoDragStarted = (e,dragVideoDetails,categoryDetails)=>{
  console.log("inside categoryVideoDragStarted");
  let dragData = {video:dragVideoDetails,categoryDetails}
  e.dataTransfer.setData("dragData",JSON.stringify(dragData))
  
}

  return (
    <>
      <div className="d-flex justify-content-around align-items-center">
        <h3>All Categories</h3>
        <button onClick={handleShow} className='btn btn-warning ms-3 fs-5 rounded-circle fw-bolder'>+</button>
      </div>

{/* display all categories */}
<div className="container-fluid mt-3">
  {/* single category view */}


{
  allCategories?.length>0?
allCategories?.map((categoryDetails)=>(

  <div droppable="true" onDragOver={dragOverCategory} onDrop={e=>videoCardDropOverCategory(e,categoryDetails)} key={categoryDetails?.id} className="border rounded p-3 mb-3">
  <div className="d-flex justify-content-between">
    <h5>{categoryDetails?.categoryName}</h5>
    <button onClick={()=>removeCategories(categoryDetails?.id)} className='btn'> <i className='fa-solid fa-trash text-danger'></i></button>
  </div>
  {/* display category videos */}
  <div className="row mt-2">

  {  
    categoryDetails?.allVideos?.length>0 &&
    categoryDetails?.allVideos?.map(video=>(
      
      <div draggable={true} onDragStart={e=>categoryVideoDragStarted(e,video,categoryDetails)} key={video?.id} className="col-lg-4">
      {/* video card */}
      <VideoCard insideCategory={true} displayData={video}  />
    </div>
    ))}
  </div>
</div> 
))

 
: 
(<div className="fw-bolder rounded p-3 mb-3">No Categories are added</div>
)}


</div>




      <Modal centered show={show} onHide={handleClose} backdrop="static" keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>All Category Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingCatogoryName" label="Category Name">
            <Form.Control onChange={e=>setcategoryName(e.target.value)} type="text" placeholder="Category Name" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSaveCategory} className='btn btn-info' variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category