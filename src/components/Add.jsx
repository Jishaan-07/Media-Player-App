// rafce
import React, { useState } from 'react'
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap'
import { saveVideoAPI } from '../services/allAPI';
 
const Add = () => {
  const [videoDetails, setvideoDetails] = useState({
    caption: "", imgUrl: "", youTubeLink: ""
  })
  console.log(videoDetails);
  const [invalidYoutubeLink, setinvalidYoutubeLink] = useState(false)

  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractingEmbedLinkFromYoutubeLink=(userInputYouTubeLink)=>{
    // steps creating embed link from youtube link 
    if(userInputYouTubeLink.includes("https://www.youtube.com/watch?v=")){
      console.log(userInputYouTubeLink.split("v=")[1].slice(0,11));
      const videoId = userInputYouTubeLink.split("v=")[1].slice(0,11)
      setinvalidYoutubeLink(false)
      setvideoDetails({...videoDetails,youTubeLink:`https://www.youtube.com/embed/${videoId}`})
    }else{
      // alert("inavlid link")
      setinvalidYoutubeLink(true)
      setvideoDetails({...videoDetails,youTubeLink:""})

    }
  }
const handleUploadVideo=async()=>{
  const {caption,imgUrl,youTubeLink}=videoDetails
  if(caption && imgUrl && youTubeLink){
    // alert("processed to store video details permanently")
    // store video details permanently
  try{
    const result = await saveVideoAPI(videoDetails)
    console.log(result);
    if(result.status>=200 && result.status<300){
      // video added to json file 
      alert("Video Uploaded successfully")
      handleClose()

      setAddResponseFromHome(result)
    }else{
      console.log(result);
      
    }
    
  }catch (err){
    console.log(err);
    

  }
  }else{
    alert("please fill the form")
  }
}
 

  return (
    <>
      <div className="d-flex align-items-center">
        <h3>Upload New Videos</h3>
        <button onClick={handleShow} className='btn btn-warning ms-3 fs-5 rounded-circle fw-bolder'>+</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Uploading Video Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-3">
            <FloatingLabel controlId="floatingCaption" label="Video Caption">
              <Form.Control onChange={e => setvideoDetails({ ...videoDetails, caption: e.target.value })} type="text" placeholder="Video Caption" />
            </FloatingLabel>


            <FloatingLabel className='mt-2' controlId="floatingUrl" label="Video Image Url">
              <Form.Control  onChange={e => setvideoDetails({ ...videoDetails, imgUrl: e.target.value })}  type="text" placeholder="Video Image Url" />
            </FloatingLabel>

            <FloatingLabel  className='mt-2' controlId="floatingLink" label="Video Youtube Link">
              <Form.Control onChange={e=>extractingEmbedLinkFromYoutubeLink(e.target.value)} type="text" placeholder="Video Youtube Link" />
            </FloatingLabel>
            {
              invalidYoutubeLink && 
              <div className="text-danger fw-bolder mt-2">Invalid Yloutube Link ......Please try another</div>
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary"  >
            Cancel
          </Button>
          <Button onClick={handleUploadVideo} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add