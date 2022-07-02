
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Loader from "./Loader";

export default function SinglePostContent({ PostSlug }) {

    const url = `http://localhost/wordpress/custom-api.php?post_slug=${PostSlug}`;
    const [ data, setData ] = useState(null);
    
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data));
    });

    if (!data || data.length <= 0 ) {
        return (
            <Loader/>
        );
    }

    return (
        <>
            {
                data.map((post, index) => (
                    <div className="col-md-9" key={index}>
				        <div className="single-blog-content">
                            <h2>{ post.title }</h2>
					        <p className="post-meta">
                                <Link to={"#"}>{ post.date }</Link>
						        <span>/</span>
                                <Link to={"#"}>By { post.author }</Link>
						        <span>/</span>
                                {post.category.length > 0 ? post.category.map((category, cateIndex) => <Link key={cateIndex} to={"#"}> {category.name} </Link> ) : '' }
					        </p>
					        <div className="post-content">
						        <div className="row">
							        <div className="col-md-12">
                                        <img className="img-fluid" src={post.thumbnail} alt={post.thumbnail} />
                                        <p className="m-0 p-0" dangerouslySetInnerHTML={{ __html: post.content } }/>
							        </div>   
                                </div>
					        </div>
                        </div>
				        <div className="row">
					        <div className="col-md-12">
						        <div className="post-share">
							        <ul className="m-0 p-0">
								        <li>Share:</li>
								        <li><Link to={"#"}><FaFacebook/></Link></li>
								        <li><Link to={"#"}><FaTwitter/></Link></li>
								        <li><Link to={"#"}><FaInstagram/></Link></li>
							        </ul>
						        </div>
					        </div>
				        </div>
			        </div>
                ))
            }
        </>
    );
}