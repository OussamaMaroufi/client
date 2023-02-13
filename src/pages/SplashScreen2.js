import React from 'react'
import Button from '../common/Button'
import Icon from '../common/Icon'
import logo from "../assets/images/logo.png"
import '../styles/components/_splash2.css'
const SplashScreen2 = () => {
  return (
    <div className='wrapper flex'>
      <img src={logo} alt="" className='logo'/>
      <div className='main'>
        <p>Nostrud esse ad  in quis incididunt x duis. Lorem commodo ad cupidatat anim pariatur duis in quis incididunt cillum. Et proident irure do  Lorem commodo e eiusmod ex amet Lorem eu eu.</p>
      </div>
      <Button text='Alons y' className='btn--lg btn'/>
      <div className='footer'>
      <p>J'ai déja un compte, <span className='text_underline'>Connexion</span></p>
      <Icon/>
      </div>
    </div>
  )
}

export default SplashScreen2
