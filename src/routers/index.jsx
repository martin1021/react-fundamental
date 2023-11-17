import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout.jsx";
import Home from '../pages/Index.jsx';
import About from '../pages/About.jsx';
import Blogs from '../pages/blogs/index.jsx';
import SinglePost from '../pages/blogs/_id.jsx'
import { post, postById } from "../apis/Loaders.js";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "blogs",
                element: <Blogs/>,
                loader: post
            },
            {
                path: "blogs/:id",
                element: <SinglePost/>,
                loader: postById
            },
            {
                path: "about",
                element: <About/>
            },
        ],
    },
    
])