import { useState } from "react";
import Search from "../components/Search.jsx"
import postsData from "../posts.json"
import Article from "../components/Article.jsx";

function HomePage() {
    const [posts, setPosts] = useState(postsData);
    const [totalPosts, setTotalPosts] = useState(0);

    const onSearchChange = (value) => {
        const filteredPosts = postsData.filter((item) => 
            item.title.includes(value)
        )
        setPosts(filteredPosts);
        setTotalPosts(filteredPosts.length);
    }

    return (
        <>
        <h1>Blog</h1>
        <Search onSearchChange={onSearchChange} totalPosts={totalPosts}/>
            {posts.map((props,index) => (
                    <>
                    <Article title={props.title} tags={props.tags} date={props.date} key={index}/>
                    </>
                )
            )
            }
        </>
    );
}

export default HomePage;