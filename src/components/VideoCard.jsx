// rafce
import React,{useState} from 'react'
import { Modal,Card } from 'react-bootstrap'
import { removeVideoAPI, saveHistoryApi } from '../services/allAPI';
import { deleteHistoryAPI, getAllHistoryAPI } from '../services/allAPI'; // Ensure this is correctly imported



const VideoCard = ({displayData,setdeleteVideoResponseFromVideoCard,insideCategory}) => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = async () =>{ 
    
    // display modal
    setShow(true);
    // store history in json
    const {caption,youTubeLink}=displayData
    const sysDateTime= new Date()
    console.log(sysDateTime.toLocaleString('en-US',{timeZoneName:'short'}));
    const timeStamp = sysDateTime.toLocaleString('en-US',{timeZoneName:'short'})
    const hsitoryDetails = {caption,youTubeLink,timeStamp}
    try{
      await saveHistoryApi(hsitoryDetails)
    }catch(err){
      console.log(err);
      
    }
  }

  const deleteVideo = async(id)=>{

    try{
      const result = await removeVideoAPI(id)
      setdeleteVideoResponseFromVideoCard(result)

    }catch(err){
      console.log(err);
      
    }
  }

const videoCardDragStarted = (e,dragVideoDetails)=>{
  console.log("Inside videoCardDragStarted with videoId : "+dragVideoDetails?.id);
  // share data using event drag start 
  e.dataTransfer.setData("videoDetails",JSON.stringify(dragVideoDetails))
  
}

  return (
    
    <>
       <Card draggable={true} onDragStart={e=>videoCardDragStarted(e,displayData)} style={{height:'330px'}}>
        <Card.Img onClick={handleShow} variant="top" width={'80px'} height={'250px'} src={displayData?.imgUrl} />
        <Card.Body>
          <Card.Text className='d-flex justify-content-between'>
           <p>{displayData?.caption}</p>
{
           !insideCategory &&  <button onClick={()=>deleteVideo(displayData?.id)} className='btn'> <i className='fa-solid fa-trash text-danger'></i></button>
           }
          </Card.Text>
        </Card.Body>
      </Card>
  
  
      <Modal size='lg' show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Caption</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <iframe width="100%" height="514" src={`${displayData?.youTubeLink}`} title="Caption" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  
          </Modal.Body>
          </Modal>
  



        
    
    </>
  )
}

export default VideoCard