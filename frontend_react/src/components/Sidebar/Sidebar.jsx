import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { images } from '../../constants';
import { VscHome, VscAccount, VscMail, VscListSelection, VscChromeClose } from "react-icons/vsc";
import './Sidebar.scss';


const Sidebar = () => {
  return (
    <nav className="bg-[#181818] w-[60px] h-full absolute top-0 z-10 min-h-[500px] ">

      {/* Main Logo  */}
      <Link className="logo flex flex-col py-2 px-0" to="/">
        <img src={ images.logo } alt="logo" />
        {/* <img src={ images.logoSubtitle } className={ `sub-logo w-[50px]` } alt="KC Samm" /> */}
        <p className={ `sub-logo w-[50px] text-blue-400 text-center my-2 mx-[auto]` }>KC Samm</p>
      </Link>

      {/* Navigation Links  */}
      <div className="nav-links flex flex-col justify-items-center ">

        {/* Home  */}
        <NavLink exact="true" activeclassname="active" to="/" className={ `text-blue-400` }>
          <VscHome className='text-blue-400' />
        </NavLink>

        {/* About  */}
        <NavLink exact="true" activeclassname="active" to="/about" className={ `about-link text-blue-400` }>
          <VscAccount className='text-blue-400' />
        </NavLink>

        {/* Contact  */}
        <NavLink exact="true" activeclassname="active" to="/contact" className={ `contact-link text-blue-400` }>
          <VscMail className='text-blue-400' />
        </NavLink>
      </div>
    </nav>
  )
}

export default Sidebar;