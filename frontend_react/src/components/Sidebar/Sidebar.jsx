import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { images } from '../../constants';
import { VscHome, VscAccount, VscMail, VscTools, VscListSelection, VscChromeClose } from "react-icons/vsc";
import './Sidebar.scss';


const Sidebar = () => {
  return (
    <nav>

      {/* Main Logo  */}
      <Link className="logo w-[60px] flex flex-col py-2 px-0" to="/">

        <svg width="58px" height="58px" viewBox="0 0 16 16">
            <path fill="none" stroke="#030bfc" strokeWidth="2" d="
            m 3 10
            c 0 4 8 4 8 0
            q 0 -2 -4 -3
            q -4 -1 -4 -3
            c 0 -4 8 -4 8 0
            "></path>
          </svg>

        <p className={ `sub-logo w-[60px] text-blue-400 text-center my-2 mx-[auto]` }>KC Samm</p>
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

        {/* Skills  */}
        <NavLink exact="true" activeclassname="active" to="/skills" className={ `skills-link text-blue-400` }>
          <VscTools className='text-blue-400' />
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