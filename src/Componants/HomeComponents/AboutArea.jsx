
import { FaDownload } from 'react-icons/fa';
import ProfilePic from '../../Images/profile-pic.jpg';

export default function AboutArea() {
    return (
        <>
            <section id="about-area" className="py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="about-thum-area wow fadeInLeft">
                        <div className="about-img">
                            <img src={ ProfilePic } alt="Resume Template" />
                        </div>
                        <div className="resume-btn">
                            <button><FaDownload/> Download Resume</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="about-content-area wow fadeInRight">
                        <div className="section-title">
                            <h2>About Me</h2>
                        </div>
                        <p>Hello! I’m Palash. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects. Having an in-depth knowledge including advanced HTML5, CSS3, JavaScript, jQuery, React JS, PHP, MySql, and WordPress back-end  . Strong background in management and leadership.</p>
                        <ul className="profile-menu m-0 p-0">
                            <li><span>Name: </span> Palash Nath</li>
                            <li><span>Year of birth: </span> 2000 </li>
                            <li><span>Nationality: </span> Bangladeshi</li>
                            <li><span>Address: </span> Chattogram, Bangladesh</li>
                            <li><span>Phone: </span><a href="tel:+8801304780828">+880 130478 0828</a></li>
                            <li><span>E-Mail: </span><a href='mailto:palashnath880@yahoo.com'>palashnath880@yahoo.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}