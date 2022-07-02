import Interest from "../SubComponants/Interest";
import { FaPencilAlt , FaPlane, FaMusic, FaCoffee , FaSpaceShuttle, FaPaintBrush } from 'react-icons/fa';

export default function InterestArea() {
    return (
        <section id="interest-area" className="py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="section-title">
                            <h2>My interests</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center pb-5">
                    <div className="col-md-10">
                        <div className="interests-content">
                            <div className="row">
                                <Interest InterestIcon={<FaPencilAlt />} InterestTitle="Drawing" />
                                <Interest InterestIcon={<FaPlane />} InterestTitle="Travel" />
                                <Interest InterestIcon={<FaMusic />} InterestTitle="Music" />
                                <Interest InterestIcon={<FaCoffee />} InterestTitle="Coffee" />
                                <Interest InterestIcon={<FaSpaceShuttle />} InterestTitle="Flying" />
                                <Interest InterestIcon={<FaPaintBrush />} InterestTitle="Art" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}