import React from 'react'
import '../styles/common/Icon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeftRotate,faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Icon = () => {
  return (
    <div className='icon'>
    <FontAwesomeIcon icon={faArrowRight} />
    </div>
  )
}

export default Icon
