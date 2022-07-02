
export default function PortfolioPopup({ Visibility, PortfolioImg, PopupHandle }) {
    return (
        <>
            <div className={`${Visibility} popup_modal`}>
                <div className="modal_body">
                    <div className="modal_close">
                        <button onClick={PopupHandle}>
                            <svg width="72px" height="72px" viewBox="0 0 72 72" id="emoji" xmlns="http://www.w3.org/2000/svg">  <g id="hair"/>
                                <g id="line">
                                    <line x1="17.5" x2="54.5" y1="17.5" y2="54.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                                    <line x1="54.5" x2="17.5" y1="17.5" y2="54.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <div className="modal_content">
                        <img src={PortfolioImg} alt={PortfolioImg} />
                    </div>
                </div>
            </div>
        </>
    );
} 