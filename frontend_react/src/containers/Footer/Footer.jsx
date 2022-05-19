import React from 'react'
import './footer.scss';
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='container footer-section'>
      <div className="flex m-5 ">
        <a href='https://twitter.com/TheKCSamm' target={`_blank`} className='twitter'>
          <AiFillTwitterCircle className='text-[30px] mx-4' />
        </a>
        <a href='https://www.instagram.com/kcsamm/' target={`_blank`} className='instagram'>
          <AiFillInstagram className='text-[30px] mx-4' />
        </a>
        <a href='https://web.facebook.com/KCSamm/' target={`_blank`} className='facebook'>
          <BsFacebook className='text-[30px] mx-4' />
        </a>
      </div>
    </div>
  )
}

export default Footer