import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function PostSearch() {
    const [val, setVal] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/posts/search/${val}`);
    }

    return (
        <>
            <form onSubmit={submitHandler}>
				<input type="text" placeholder="Enter Keyword..." value={val} onChange={(e) => setVal(e.target.value) }/>
				<input type="submit" value="Search" />
			</form>
        </>
    );
}