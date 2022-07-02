
import { NavLink } from 'react-router-dom';

export default function Menu({ activeClass , handleClick }) {
    return (
        <>
            <div className={ `off-canvas-menu${activeClass} `}>
        <nav className="main-menu">
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/about"}>About</NavLink></li>
                <li><NavLink to={"/education"}>Education</NavLink></li>
                <li><NavLink to={"/"}>Portfolio</NavLink></li>
                <li><NavLink to={"/"}>Single Portfolio</NavLink></li>
                <li><NavLink to={"/"}>Testimonials</NavLink></li>
                <li><NavLink to={"/"}>Blog</NavLink></li>
                <li><NavLink to={"/"}>Single Blog</NavLink></li>
                <li><NavLink to={"/"}>Contact Me</NavLink></li>
            </ul>
        </nav>
            <button className="menu-close-btn" onClick={handleClick}>
                <svg width="40px" height="40px" viewBox='0 0 72 72' xmlns="http://www.w3.org/2000/svg">
                    <g id="line">
                        <line x1="17.5" x2="54.5" y1="17.5" y2="54.5" fill="none" stroke="whitesmoke" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        <line x1="54.5" x2="17.5" y1="17.5" y2="54.5" fill="none" stroke="whitesmoke" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                    </g>
                </svg>
            </button>
    </div>
        </>
    );
}