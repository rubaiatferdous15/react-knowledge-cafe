import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";



const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
const [Blogs, setBlogs] = useState([])

useEffect( () => {
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setBlogs(data));
},[])

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {Blogs.length}</h1>
            {
                Blogs.map(blog =><Blog handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark} key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blogs;