import { useEffect, useState } from 'react';
import { FaBehance, FaDribbble, FaFacebookF, FaTwitter, FaLinkedin , FaAngleUp } from 'react-icons/fa';
export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    const [ scrollTopBtn, setScrollTopBtn ] = useState("");

    const topScroll = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    const scrollTopBtnHandle = () => {
        const windowHeight = window.innerHeight;
        const windowScrollY = window.scrollY;
        if (windowScrollY >= ( windowHeight - 100) ) {
            setScrollTopBtn("active");
        } else {
            setScrollTopBtn("");
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollTopBtnHandle );
        return () => window.removeEventListener('scroll' , scrollTopBtnHandle );
    } , [setScrollTopBtn]);

    return (
        <>
        <footer id="footer-area" className='pt-5'> 
        <div className="container pt-4">
            <div className="row">
                <div className="col-md-12">
                    <div className="footer-social-link">
                        <ul className="footer-icons m-0">
                            <li><a href="https://www.facebook.com"><FaBehance /></a></li>
                            <li><a href="https://www.facebook.com"><FaDribbble /></a></li>
                            <li><a href="https://www.facebook.com"><FaFacebookF /></a></li>
                            <li><a href="https://www.facebook.com"><FaTwitter /></a></li>
                            <li><a href="https://www.facebook.com"><FaLinkedin /></a></li>
                        </ul>
                    </div>
                    <hr/>
                    <div className="copyright-area text-center">
                        <p className='m-0'>Copyright &copy; { year } . ALL RIGHTS RESERVED.</p>
                    </div>
                </div>
            </div>
        </div>
        </footer>
            <div id="scroll" title="Back To Top" className={scrollTopBtn}>
                <button onClick={topScroll}><FaAngleUp /></button>
            </div>
        </>
    );
}