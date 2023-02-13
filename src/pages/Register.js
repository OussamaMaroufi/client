import React from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVoicemail} from '@fortawesome/free-solid-svg-icons'
import logo1 from "../assets/images/logo1.png"
import Hiboutchou from "../assets/images/Hiboutchou.png"
import "../styles/components/__register.css"

import person from "../assets/images/person.png"
import email from "../assets/images/email.png"
import phone from "../assets/images/phone.png"
import facebook from "../assets/images/facebook.png"
import google from "../assets/images/google.png"
import apple from "../assets/images/apple.png"

const Register = () => {
  return (
    <div className='form_wrapper'>
        <section className='header'>
            <img src={logo1}/>
            <img src={Hiboutchou}/>
            <h4>Inscription</h4>
        </section>
        <section className='form'>
        <Input  label='Quel est votre nom ?' placeholder='Nom Complet' iconName={person}/>
            <Input label='Quel est votre Email ?' placeholder='Email'iconName={email}/>
            <Input label='Quel est votre numero de telephone ?' placeholder='Numero Telephone' iconName ={phone}/>
            <Input label='Choisissez un mot de passe' placeholder='Mot de passe '  />
            <Button className='btn btn-lg' text="Je m'inscris"/>
        </section>

        <section className='footer'>
            <h4>Ou bien inscrivez vous avec </h4>
            <div className='social_login' >
                <div className=''><img src={facebook}/></div>
                <div className=''><img src={google}/></div>
                <div className=''><img src={apple}/></div>
            </div>

        </section>
       
      
    </div>
  )
}

export default Register
