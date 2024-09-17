import { useState } from 'react'
import {Route , Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/home/cart/Cart'
import Footer from './component/footer/Footer'
import './App.css'
import Navbar from './component/nevbar/Nevbar'
import PlaceOrder from './pages/home/cart/placeOrder/PlaceOrder'
import LoginPopup from './component/loginPopup/LoginPopup'

function App() {
  const [showLogin , setShowLogin] = useState(false);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin = {setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='/cart' element ={<Cart/>}/>
          <Route path='/order' element ={<PlaceOrder/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
