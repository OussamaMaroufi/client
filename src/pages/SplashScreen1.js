import React from 'react'
import Button from '../components/Button'
import logo from "../assets/images/logo.png"
import '../styles/components/_splash1.css'

const SplashScreen1 = () => {
  return (
    <div style={{}}>
      <div className='container'>
      {/* logo section */}
        
          <img src={logo} alt="logo" className='img'/>
    
        <div className='typography'>
          <p>
            Voluptate exercitation officia excepteur reprehenderit pariatur sint. Dolore irure consequat anim labore officia in. Id exercitation cillum labore eu tempor proident enim.
          </p>
        </div>

      <div>
        <Button className='btn' text='Allons y'/>
      </div>
          <p>J'ai deja un compte, <span style={{fontWeight:'700',textDecoration:'underline',marginLeft:'6px'}}>Connexion</span> </p>
        
      </div>
    </div>
  )
}

export default SplashScreen1
