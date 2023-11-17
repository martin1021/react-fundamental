// import { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

function Blogs() {
    // const [posts, setPosts] = useState([]);
    const post = useLoaderData()

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then((response) => response.json())
    //         .then((json) => setPosts(json))


    // }, []);

    return (
        <>
        <h2>External Posts</h2>
        {posts.map((item, index) => (
            <div key={index}>
                <Link to={`${item.id}`} >- {item.title}</Link>
            </div>
        ))}
        </>
    )
}

export default Blogs;