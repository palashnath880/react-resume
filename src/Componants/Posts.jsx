import '../page.scss';
import PageTitle from "./SubComponants/PageTitle";
import TitleBg from '../Images/blog/page-title-bg.jpg';
import { useEffect, useState } from "react";
import PostsPostItem from './SubComponants/PostsPostItem';
import Loader from './SubComponants/Loader';
import PostSearch from './SubComponants/PostSearch';
import AllCategories from './SubComponants/AllCategories';
import { useParams } from 'react-router-dom';

export default function Posts() {

    const url = "http://localhost/wordpress/custom-api.php?posts_per_page=3";
    const [data, setData] = useState(null);
    const [ search ] = useParams();
    
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    if (search) {
        return false;
    }
    
    return (
        <>
            <PageTitle PageTitleBG={TitleBg} PageTitle={"Blog"} PageDescription="Lorem Ipsum is the better symbol content " />
            <section id="page-content-wrap">
		        <div className="container">
                    <div className="row">
                        {/* Page Left Area  */}
                        <div className="col-md-9">
                            <div className="blog-area-wrap">
                                {   
                                    data && data.length > 0 ? data.map((post, index) => <PostsPostItem key={index} title={post.title} thumbnail={post.thumbnail} slug={post.slug} description={post.content} commentCount={post.comments_number} postDate={post.date} />) : <Loader />
                                }
                            </div>
                        </div>

                        {/* Page Right Area  */}
                        <div className="col-md-3">
                            <div className="sidebar-wrap">
                                <div className='single-sidebar'>
                                    <PostSearch />
                                </div>
                                <div className='single-sidebar'>
                                    <AllCategories />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}