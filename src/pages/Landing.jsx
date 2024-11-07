// rafce
import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/guitar.jpg'
import feature1 from '../assets/img1.jpg'
import feature2 from '../assets/img2.jpg'
import feature3 from '../assets/img3.jpg'
import { Card } from 'react-bootstrap'
const Landing = () => {
  return (
    <div style={{ paddingTop: '100px' }} className='container'>
      {/* landing part */}
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }}>
            Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!! </p>
          <Link to={'/home'} className='btn btn-info'>Get Started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img className='img-fluid ms-5' style={{ width: '500px' }} src={landingImg} alt="landing image" />
        </div>
      </div>
      {/* Features part */}
      <div className="my-5">
        <h3 className='text-center'>Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
            <Card style={{ width: '20rem' }}>
              <Card.Img height={'350px'} variant="top" src={feature1} />
              <Card.Body>
                <Card.Title>Managing Vedios</Card.Title>
                <Card.Text>
                Users can upload, view and remove the videos.
                </Card.Text>
               
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
          <Card style={{ width: '20rem' }}>
              <Card.Img height={'350px'} variant="top" src={feature2} />
              <Card.Body>
                <Card.Title>Categorise Videos
                </Card.Title>
                <Card.Text>
                Users can categorise the videos by drag and drop feature.
                </Card.Text>
               
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
          <Card style={{ width: '20rem' }}>
              <Card.Img height={'350px'} variant="top" src={feature3} />
              <Card.Body>
                <Card.Title>Managing Vedios</Card.Title>
                <Card.Text>
                Users can manage the watch history of all videos.
                </Card.Text>
               
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* vedio part */}
      <div className="row p-5 border rounded align-items-center my-5">
        <div className="col-lg-5">
          <h3 className='text-warning'>Simple,Fastand Powerfull</h3>
          <p className='' style={{textAlign:'justify'}}><span className='fw-bolder fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus velit quidem assumenda impedit quas,. Ipsa accusamus at sequi molestias nostrum eligendi.</p>
          <p className='' style={{textAlign:'justify'}}><span className='fw-bolder fs-5'>Categorise videos</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus velit quidem assumenda impedit quas,. Ipsa accusamus at sequi molestias nostrum eligendi.</p>  <p className='' style={{textAlign:'justify'}}><span className='fw-bolder fs-5'>Managing History</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus velit quidem assumenda impedit quas,. Ipsa accusamus at sequi molestias nostrum eligendi.</p>
        </div>
        <div className="col-lg"></div>
        <div className="col-lg-6">
        <iframe width="100%" height="514" src="https://www.youtube.com/embed/TZ72x7qbIGQ" title="Oggy and the Cockroaches - The Kitchen Boy (S04E27) BEST CARTOON COLLECTION | New Episodes in HD" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing