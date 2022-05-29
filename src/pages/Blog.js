import React from "react"
import { Link }  from "react-router-dom"
import Markdown from "react-markdown"
import postsData from "../posts.json"

import PostList from "../components/blogpostlist";

const Blog = (props) => {
    const validId = parseInt(props.match.params.id)
    let postExists = false;
    const fetchedPost = {};

    postsData.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.title = post.title ? post.title : "No title given"
            fetchedPost.date = post.date ? post.date : "No date given"
            fetchedPost.author = post.author ? post.author : "No author given"
            fetchedPost.icon = post.icon ? post.icon : "bi-postcard"
            fetchedPost.content = post.content ? post.content : "No content given"
            postExists = true
        }
    })

    return (
        <div className="row">
        {postExists &&
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h1><i className={`bi ${fetchedPost.icon}`} />  {fetchedPost.title}</h1>
                    </div>
                    <div className="card-body">
                        <small className="date">Published on {fetchedPost.date} by {fetchedPost.author}</small>
                        <Markdown children={fetchedPost.content} />
                    </div>
                    <div className="card-footer">
                        <Link to="/">Back to blog list</Link>
                    </div>
                </div>
            </div> }

        {postExists == false &&
        <>
            <div className="col-sm-12">
                <h1 className="visually-hidden">Blog</h1>
            </div>
            <PostList />
        </>
        }
        </div>
    )
}

export default Blog;