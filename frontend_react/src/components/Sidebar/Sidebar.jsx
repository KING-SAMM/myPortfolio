import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { images } from '../../constants';
import { VscHome, VscAccount, VscMail, VscListSelection, VscChromeClose } from "react-icons/vsc";
import './Sidebar.scss';


const Sidebar = () => {
  return (
    <nav className="bg-[#181818] w-[60px] h-full absolute top-0 z-10 min-h-[500px] ">

      {/* Main Logo  */}
      <Link className="logo block py-2 px-0" to="/">
        <img src={ images.logo } className={ `block my-2 mx-[auto] w-[24px] h-[auto]`} alt="logo" />
        {/* <img src={ images.logoSubtitle } className={ `sub-logo w-[50px]` } alt="KC Samm" /> */}
        <p className={ `sub-logo w-[50px] text-blue-400 text-center my-2 mx-[auto]` }>KC Samm</p>
      </Link>

      {/* Navigation Links  */}
      <div className="nav-links flex flex-col justify-start items-center text-center absolute h-[210px] top-[50%] mt-[-120px] w-full">

        {/* Home  */}
        <NavLink 
          exact="true" activeclassname="active" to="/" 
          className={ `block my-0 mx-[auto] text-2xl text-blue-400 h-[51px] leading-10 relative no-underline 
          hover:text-blue-300 hover:after:opacity-100 
          after:content-[' '] after:text-[9px] after:absolute after:tracking-[2px] after:bottom-0 after:block after:w-full after:text-center after:opacity-0 after:transition-all after:duration-300 after:ease-out
          first:after:content-['HOME'] `  }
        >
          <VscHome 
            className='w-6 h-6 hover:opacity-0 '  />
        </NavLink>

        {/* About  */}
        <NavLink exact="true" activeclassname="active" to="/about" 
          className={ `about-link block text-2xl h-[51px] leading-10 relative no-underline after:content-[' '] after:text-[9px] after:absolute after:tracking-[2px] after:bottom-0 after:block after:w-full after:text-center after:opacity-0` }>
          <VscAccount 
            className='w-6 h-6 text-blue-400 hover:text-blue-200 transition-all duration-300 ease-out' />
        </NavLink>

        {/* Contact  */}
        <NavLink exact="true" activeclassname="active" to="/contact" 
          className={ `contact-link block text-2xl h-[51px] leading-10 relative no-underline after:content-[' '] after:text-[9px] after:absolute after:tracking-[2px] after:bottom-0 after:block after:w-full after:text-center after:opacity-0` }>
          <VscMail 
            className='w-6 h-6 text-blue-400 hover:text-blue-200 transition-all duration-300 ease-out' />
        </NavLink>
      </div>
    </nav>
  )
}

export default Sidebar;