import { Link } from 'react-router-dom';
import {  FaSearchPlus , FaLink } from 'react-icons/fa';

export default function PortfolioItem({ PortfolioImg, PortflioTitle, PortflioSubTitle , PopupHandle }) {
    return (
        <div className="col-md-4 col-sm-6 col-xs-12 mb-3">
            <div className="portfolio-single">
                <div className="portfolio-thum">
                    <img src={PortfolioImg} alt={PortfolioImg} />
                </div>
                <div className="portfolio-hover text-center">
                    <div className="port-btn-hvr">
                        <button type='button' onClick={()=> PopupHandle(PortfolioImg)} data-img={PortfolioImg}>
                            <FaSearchPlus />
                        </button>
                        <Link to={`single-portfolio${PortfolioImg}`} ><FaLink/></Link>
                    </div>
                    <div className="port-meta">
                        <h4>{ PortflioTitle }</h4>
                        <p className="m-0 p-0">{ PortflioSubTitle }</p>
                    </div>
                </div>
            </div>
        </div>
    );
}