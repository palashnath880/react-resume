import { Link } from 'react-router-dom';
export default function HireArea() {
    return (
        <section id="message-area" className="py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="message-content">
                        <div className="hire-content">
                            <h2>HIRE ME FOR YOUR AWESOME PROJECT</h2>
                            <p>I am available for Freelance projects that depends on your project value. Hire me and get your project done!</p>
                        </div>
                        <div className="hire-btn">
                            <Link to={"#"}>Hire Me</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}