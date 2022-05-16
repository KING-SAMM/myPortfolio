import { useState } from 'react';
import './MobileNav.scss';
import { HiMenuAlt2, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MobileNav = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='app__navbar'>
            {/* Mobile navigaton links  */}
            {/* <ul className="app__navbar-links">
                {[ "home", "about", "skills", "contact" ].map(( item ) => (
                <l1 key={ `link-${ item }` } className="app__flex p-text" >
                    <div />
                    <a href={ `#${ item }` }> { item } </a>
                </l1>
                ))}
            </ul> */}

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
                            {[ "home", "about", "skills", "contact" ].map(( item ) => (
                                <l1 key={ `${ item }` }>
                                    <Link 
                                        to={ `/${ item }` }
                                        onClick={ () => setToggle( false ) } 
                                        className="text-2xl text-blue-100 font-normal hover:text-blue-50 "
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