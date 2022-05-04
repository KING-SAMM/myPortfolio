import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { images } from '../../constants';
import { VscHome, VscAccount, VscMail, VscListSelection, VscChromeClose } from "react-icons/vsc";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';

const NavIcon = ({ icon, color, subtitle }) =>
{
  <div>
    <div className={ `w-10 h-10 rounded-full flex justify-center items-center ${ color }` }>
        { icon }
    </div>
    <div className="flex flex-col">
        <p className="mt-2 text-white text-sm md:w-9/12">{ subtitle }</p>
    </div>
  </div>
};

const Sidebar = () => {
  return (
    <nav className="gradient-bg-home w-20 h-screen absolute top-0 z-10 min-h-124">
      <Link className="logo block py-2 px-0" to="/">
        <img src={ images.logo } className={ `block my-2 mx-[auto] w-16 h-[auto]`} alt="logo" />
        <img src={ images.logoSubtitle } className={ `sub-logo w-[50px]` } alt="KC Samm" />
      </Link>
      <div className="flex flex-col justify-start items-center text-center absolute h-[210px] top-[50%] mt-[-120px] w-full">
        <NavLink exact="true" activeclassname="active" to="/" className={ `block text-2xl h-[51px] leading-10 relative no-underline` }>
          <VscHome className='w-6 h-6 text-blue-400 hover:text-blue-200 transition-all duration-300 ease-out' />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/about" className={ `about-link block text-2xl h-[51px] leading-10 relative no-underline` }>
          <VscAccount className='w-6 h-6 text-blue-400 hover:text-blue-200 transition-all duration-300 ease-out' />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/contact" className={ `contact-link block text-2xl h-[51px] leading-10 relative no-underline` }>
          <VscMail className='w-6 h-6 text-blue-400 hover:text-blue-200 transition-all duration-300 ease-out' />
        </NavLink>
      </div>
    </nav>
  )
}

export default Sidebar;