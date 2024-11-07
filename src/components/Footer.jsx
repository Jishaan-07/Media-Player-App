// rafce
import React from 'react'
import { Link } from 'react-router-dom'
Link

const Footer = () => {
  return (
    <div style={{height:'300px'}} className='mt-5 container w-100'>
        <div className='d-flex justify-content-between'>
            {/* intro */}
           <div style={{width:'400px'}}>
              <h5>    <i class="fa-solid fa-headphones"></i>          Media player</h5>
              <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
              <p>Code licensed MIT, docs CC BY 3.0.</p>
              <p>Currently v5.3.3.</p>
           </div>
            {/* links */}
            <div className="d-flex flex-column">
              <h5>Links</h5>
              <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
              <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
              <Link to={'/history'} style={{textDecoration:'none',color:'white'}}>History Page</Link>

            </div>
            {/* guides */}
            <div className="d-flex flex-column">
              <h5>Guides</h5>
              <a style={{textDecoration:'none',color:'white'}} href="https://react.dev/" target='_blank'>React</a>
              <a style={{textDecoration:'none',color:'white'}} href="https://reactrouter.com/en/main" target='_blank'>React Router</a>
              <a style={{textDecoration:'none',color:'white'}} href="https://react-bootstrap.netlify.app/" target='_blank'>React Bootstrap</a>

            </div>
            {/* contact */}
            <div className="d-flex flex-column">
              <h5>Contact</h5>
              <div className="d-flex">
                <input placeholder='Enter your Email here!!' type="text" className="form-control me-2"/>
                <button className='btn btn-info'>
                <i class="fa-solid fa-circle-arrow-right"></i>
                </button>

              </div>
              <div className="d-flex justify-content-between mt-3">
                <a style={{textDecoration:'none',color:'white'}} target='_blank' href="">  <i class="fa-brands fa-x-twitter"></i></a>
                <a style={{textDecoration:'none',color:'white'}} target='_blank' href="https://www.instagram.com/welcome.ai/?hl=en">  <i class="fa-brands fa-instagram"></i></a>
                <a style={{textDecoration:'none',color:'white'}} target='_blank' href="https://www.facebook.com/">  <i class="fa-brands fa-facebook"></i></a>
                <a style={{textDecoration:'none',color:'white'}} target='_blank' href="https://www.linkedin.com/mynetwork/grow/">  <i class="fa-brands fa-linkedin"></i></a>
                <a style={{textDecoration:'none',color:'white'}} target='_blank' href="https://github.com/">  <i class="fa-brands fa-github"></i></a>
                <a style={{textDecoration:'none',color:'white'}} target='_blank' href="https://github.com/"> <i class="fa-solid fa-phone"></i></a>

              </div>
            </div>
        </div>
        <p className='text-center mt-3'>Copyright &copy; July 2024 Batch  , Media Player App .Built with React</p>
    </div>
  )
}

export default Footer