import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DefaultPostImg from '../../Images/blog/blog-thum-1.jpg';
export default function BlogItem({ title, thumbnail, slug, description, commentCount , postDate }) {
    const wordCount = description.split(" ");
    return (
        <>
            <div className="col-md-4 col-sm-6 col-xs-12 mt-2">
                <div className="single-blog wow fadeInLeft">
                    <div className="blog-thum">
                        { thumbnail === false ? <img src={DefaultPostImg} alt={DefaultPostImg} /> : <img src={thumbnail} alt={thumbnail} /> }
                    </div>
                    <div className="blog-content">
                        <h4>{title}</h4>
                        <p className="post-meta">
                            <Link to={"#"}>{ postDate }</Link>
                            <span>|</span>
                            <Link to={"#"}>{ commentCount === '0' ? 'No Comments' : `${commentCount} Comments` }</Link>
                        </p>
                        <p>{description} {wordCount.length === 20 ? <Link to={`/post/${slug}`}>. . . .</Link> : ''}</p>
                        <Link to={`/post/${slug}`} className="readmore-btn">read more <FaAngleRight/></Link>
                    </div>
                </div>
            </div>
        </>
    );
}