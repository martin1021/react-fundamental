import { useState, useEffect } from "react";
import Search from "../components/Search.jsx"
import postsData from "../posts.json"
import Article from "../components/Article.jsx";

function HomePage() {
    const [posts, setPosts] = useState(postsData);
    const [totalPosts, setTotalPosts] = useState(0);
    const [externalPosts, setExternalPosts] = useState([]);

    const onSearchChange = (value) => {
        const filteredPosts = postsData.filter((item) =>
            // TempVar. key yang ditunjuk. metode(variable lemparan search change)
            item.title.includes(value)
        )
        setPosts(filteredPosts);
        setTotalPosts(filteredPosts.length);
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setExternalPosts(json));


    }, []);

    return (
        <>
            <h1>Simple Blog</h1>
            <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
            {posts.map((props, index) => (
                // <Component {properti} key />
                <Article {...props} key={index} />
            ))}

            <hr />
            <h2>External Posts</h2>
            {externalPosts.map((item, index) => (
                <div key={index}>- {item.title}</div>
            ))}
        </>
    );
}

export default HomePage;