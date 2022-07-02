import PortfolioItem from "../SubComponants/PortfolioItem";
import PortImg1 from '../../Images/portfolio/port_item-1.jpg';
import PortImg2 from '../../Images/portfolio/port_item-2.jpg';
import PortImg3 from '../../Images/portfolio/port_item-3.jpg';
import PortImg4 from '../../Images/portfolio/port_item-4.jpg';
import PortImg5 from '../../Images/portfolio/port_item-5.jpg';
import PortImg6 from '../../Images/portfolio/port_item-6.jpg';
import PortBG from '../../Images/portfolio/port-bg.jpg';
import { useState } from "react";
import PortfolioPopup from "../SubComponants/PortfolioPopup";
import { Link } from 'react-router-dom';

export default function PortfolioArea() {
    const [popup, setPopup] = useState('');
    const [port_img, setPort_img] = useState(''); 

    const popupHandle = (e) => {
        if (popup === 'active') {
            setPopup('');
            setPort_img('');
        } else {
            setPopup('active');
            setPort_img(e);
        }
    }

    return (
        <>
        <section id="portfolio-area" className="py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-title">
                        <h2>Some Of My Works</h2>
                    </div>
                </div>
            </div>
        </div>

        <div className="portfolio-container" style={{background: PortBG}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="portfolio-items">
                            <div className="row">
                                    <PortfolioItem PortfolioImg={PortImg1} PortflioTitle="Branding Design" PortflioSubTitle="Logo Design" PopupHandle={popupHandle} />
                                    <PortfolioItem PortfolioImg={PortImg2} PortflioTitle="Branding Design" PortflioSubTitle="Logo Design" PopupHandle={popupHandle} />
                                    <PortfolioItem PortfolioImg={PortImg3} PortflioTitle="Branding Design" PortflioSubTitle="Logo Design" PopupHandle={popupHandle} />
                                    <PortfolioItem PortfolioImg={PortImg4} PortflioTitle="Branding Design" PortflioSubTitle="Logo Design" PopupHandle={popupHandle} />
                                    <PortfolioItem PortfolioImg={PortImg5} PortflioTitle="Branding Design" PortflioSubTitle="Logo Design" PopupHandle={popupHandle}/>
                                    <PortfolioItem PortfolioImg={PortImg6} PortflioTitle="Branding Design" PortflioSubTitle="Logo Design" PopupHandle={popupHandle} />  
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="portfolio-btn">
                            <Link to={"/portfolio"}>Load More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </section>
            <PortfolioPopup Visibility={popup} PortfolioImg={port_img} PopupHandle={popupHandle} />
        </>
    );
}