import './MobleNav.scss';
import { HiMenuAlt2 } from

const MobleNav = () => {
    return (
        <nav className='app__navbar'>
            {/* Mobile navigaton links  */}
            <ul className="app__navbar-links">
                {[ "home", "about", "skills", "contact" ].map(( item ) => (
                <l1 key={ `link-${ item }` } className="app__flex p-text" >
                    <div />
                    <a href={ `#${ item }` }> { item } </a>
                </l1>
                ))}
            </ul>

            {/* Real Mobile Navigation Menu  */}
            <div className="app__navbar-menu">

            </div>
        </nav>
    )
}

export default MobleNav;