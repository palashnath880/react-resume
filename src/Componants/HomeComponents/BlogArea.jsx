import BlogItem from "../SubComponants/BlogItem";
import { Link } from "react-router-dom";
import Loader from "../SubComponants/Loader";
import { useEffect, useState } from "react";

export default function BlogArea() {

    const url = "http://localhost/wordpress/custom-api.php?posts_per_page=3";
    const [ data, setData ] = useState(null);
    
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data));
    },[]);

    if(!data){
        return (
            <Loader />
        );
    }

    return (
        <section id="blog-area" className="py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-title text-center py-5">
                        <h2 className="m-0 text-light display-6">Blog Posts</h2>
                    </div>
                </div>
            </div>
                <div className="row">
                    {   
                       data && data.length > 0 ? data.map((post, index) => <BlogItem key={index} title={post.title} thumbnail={post.thumbnail} slug={post.slug} description={post.content} commentCount={post.comments_number} postDate={post.date} />) : 'invalid Post' 
                    }
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="blog-load-btn">
                        <Link to={"/posts"} className="loadmore-btn">Load More</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}