 
import './App.css'
import {Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
   
  return (
    <>
    {/* path for landing (base Url :http://localhost:5173/ ),home (base url : http://localhost:5173/home),history (base url : http://localhost:5173/history) */}


 {/* header */}
<Header/>




    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/history' element={<History/>}/>
    </Routes>




{/* footer */}
<Footer/>

    </>
  )
}

export default App
