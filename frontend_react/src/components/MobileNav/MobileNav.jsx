import { useState } from 'react';
import './MobileNav.scss';
import { HiMenuAlt2, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MobileNav = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='app__navbar'>
            {/* Real Mobile Navigation Menu  */}
            <div className="app__navbar-menu">
                <HiMenuAlt2 onClick={ () => setToggle( true ) } />

                { toggle && (
                    <motion.div
                        whileInView={ {x: [300, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={ () => setToggle(false) } />
                        <ul>
                            {/* Home is not part of the loop  */}
                            <l1>
                                <a 
                                    href={ `#` }
                                    // to="/"
                                    onClick={ () => setToggle( false ) } 
                                    className="text-2xl text-blue-100 font-normal hover:text-blue-50"    
                                > 
                                    home 
                                </a>
                            </l1>
                            {/* Loop through other menu items  */}
                            {[ " ", "about", "skills", "contact" ].map(( item ) => (
                                <l1 key={ `${ item }` }>
                                    <a 
                                        href={ `#${ item }` }
                                        // to={ `/${ item }` }
                                        onClick={ () => setToggle( false ) } 
                                        className="text-2xl text-blue-100 font-normal hover:text-blue-50 "
                                    > 
                                        { item } 
                                    </a>
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