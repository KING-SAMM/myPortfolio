import { useState } from 'react';
import './MobileNav.scss';
import { HiMenuAlt2, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";

const MobileNav = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='app__navbar'>
            {/* Real Mobile Navigation Menu  */}
            <div className="app__navbar-menu">
                <HiMenuAlt2 onClick={ () => setToggle( true ) } />

                { toggle && (
                    <motion.div
                        whileInView={ {x: [250, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                    >
                        <HiX onClick={ () => setToggle(false) } />
                        <ul>
                            {/* Loop through other menu items  */}
                            {[ "home", "about", "skills", "contact" ].map(( item ) => (
                                <l1 key={ `${ item }` } className={`my-1`}>
                                    <Link
                                        activeClass={`active`}
                                        to={ `${ item }` }
                                        spy={true}
                                        smooth={true}
                                        offset={10}
                                        duration={500}
                                        onClick={ () => setToggle( false ) } 
                                        className={`text-2xl text-blue-200 font-normal hover:text-blue-50`}
                                    >
                                        { item }
                                    </Link>
                                </l1>
                            ))}
                        </ul>
                    </motion.div>
                ) }
            </div>
        </nav>
    )
}

export default MobileNav;