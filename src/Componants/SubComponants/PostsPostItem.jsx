import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DefaultPostImg from '../../Images/blog/blog-thum-1.jpg';
export default function BlogItem({ title, thumbnail, slug, description, commentCount , postDate }) {
    const wordCount = description.split(" ");
    return (
        <>
            <div className="single-blog-wrap wow fadeInUp">
				<div className="row m-0">
					<div className="col-md-5 col-sm-5 py-3 ps-2">
                        <div className="blog-thumbnail">
                            { thumbnail === false ? <img src={DefaultPostImg} alt={DefaultPostImg} /> : <img src={thumbnail} alt={thumbnail} /> }
                        </div>
					</div>
					<div className="col-md-7 col-sm-7 py-2">
						<div className="blog-content-wrap">
							<div className="display-table">
								<div className="display-table-cell">
									<h4><Link to={`/post/${slug}`} >{title}</Link></h4>
									<p className="post-meta-wrap">
                                        <Link to={"#"}>{ postDate }</Link>
                                        <span>|</span>
                                        <Link to={"#"}>{ commentCount === '0' ? 'No Comments' : `${commentCount} Comments` }</Link>
									</p>
									<p>{description} {wordCount.length === 20 ? <Link to={`/post/${slug}`}>. . . .</Link> : ''}</p>
									<Link to={`/post/${slug}`} className="readmore-btn">read more <FaAngleRight/></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        </>
    );
}