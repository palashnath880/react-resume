export default function PageTitle({ PageTitleBG, PageTitle , PageDescription }){
    return (
        <>
            <div className="every-page-margin"></div>
            <section id="page-title-area" style={{backgroundImage: `${PageTitleBG}`}}>
		        <div className="container">
			        <div className="row">
                        <div className="col-md-5">
                            <h1>{ PageTitle }</h1>
                            <p className="m-0">{ PageDescription }</p>
				        </div>
			        </div>
		        </div>
	        </section>
        </>
    );
}