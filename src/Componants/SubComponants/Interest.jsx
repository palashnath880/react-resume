export default function Interest({ InterestIcon , InterestTitle }) {
    return (
        <div className="col-md-2 col-sm-4 col-xs-6">
            <div className="interest-item wow fadeInUp">
                <div className="interest-item-content">
                    <div className="icon">
                        { InterestIcon }
                    </div>
                    <p>{ InterestTitle }</p>
                </div>
            </div>
        </div>
    );
}