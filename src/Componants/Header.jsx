
import { FaFacebookF, FaDribbble, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Menu from "./Menu";
import { useEffect, useRef, useState } from "react";
import { useLocation } from 'react-router-dom';

export default function Header() {

    const headerRef = useRef("header");
    const [menuActiveClass, setMenuActiveClass] = useState("");
    const [stickyMenu, setStickyMenu] = useState("");
    const [ path , setPath ] = useState("");
    
    const handleMenuActive = () => { setMenuActiveClass(" active") };
    const handleMenudeActive = () => { setMenuActiveClass("") };

    const handleScroll = () => {
        const windowTop = window.scrollY;
        if (windowTop >= 30 ) {
            setStickyMenu('fixtopmenu');
        } else {
            setStickyMenu('');
        }
    }

    const urlObject = useLocation();
    useEffect(() => {
        if (urlObject.pathname !== '/') {
            setPath('header-area');
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll' , handleScroll );
    },[stickyMenu , urlObject ]);

    return (
        <>
            <header id="header-area" className={ path !== "" ? ` ${path} ${stickyMenu}` : stickyMenu } ref={headerRef}>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="header-social-icons">
                        <ul className='m-0 p-0'>
                            <li><a href="https://www.facebook.com" ><FaFacebookF /></a></li>
                            <li><a href="https://www.dribble.com"><FaDribbble /></a></li>
                            <li><a href="https://www.twitter.com"><FaTwitter/></a></li>
                            <li><a href="https://www.linkedin.com"><FaLinkedin/> </a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="menu-icon">
                        <div className="open-btn" onClick={handleMenuActive}>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </header>
            <Menu activeClass={menuActiveClass} handleClick={ handleMenudeActive } />
        </>
    );
}