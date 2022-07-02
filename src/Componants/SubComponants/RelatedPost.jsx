import useSWR from 'swr';
export default function RelatedPost({ PostSlug }) {

    const fetcher = (args) => fetch(`${args}?related_post=${PostSlug}`).then(res => res.json());

    const { data, error } = useSWR('http://localhost/wordpress/custom-api.php', fetcher, {
        suspense: true,
    });
    
    if (error) {
        return (
            <h1>Error Post Data </h1>
        );
    };

    if (!data) {
        return (<h1>Loading Post Data </h1>);
    }

    return (
        <>
            <section id="related-post-area" className="py-4">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="related-post-title">
						<h2>Related Post</h2>
					</div>
				</div>
			</div>

			<div className="row">
				
			</div>
		</div>
	</section>
        </>
    );
}