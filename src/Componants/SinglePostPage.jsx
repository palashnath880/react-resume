import { useParams } from 'react-router-dom';
import PageTitle from './SubComponants/PageTitle';
import SinglePostContent from './SubComponants/SinglePostContent';
export default function SinglePost() {
    const { slug } = useParams();
    
    return (
        <>
            <PageTitle/>
            <section id="page-content-wrap" className='py-5'>
		        <div className="container">
                    <div className="row">
                        <SinglePostContent PostSlug={slug}/>
                    </div>
                </div>
            </section>
        </>
    );
}