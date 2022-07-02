import { useEffect, useState } from "react";

export default function AllCategories() {

    const url = "http://localhost/wordpress/custom-api.php?category=true";
    const [ data, setData ] = useState(null);
    
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <>
            <h3>Categories</h3>
            <ul className="m-0 p-0">
                {
                    data && data.length > 0 ? data.map((item, index) => <li key={index}><a href="#">{ item }</a></li> ) : ''
                }
			</ul>
        </>
    );
}