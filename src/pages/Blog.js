import React from "react"
import { Link }  from "react-router-dom"
import Markdown from "react-markdown"
import postlist from "../posts.json"

const Blog = (props) => {
    const validId = parseInt(props.match.params.id)
    if (!validId) {
        return <h1>No page to display</h1>
    }
    const fetchedPost = {}
    let postExists = false
    postlist.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.title = post.title ? post.title : "No title given"
            fetchedPost.date = post.date ? post.date : "No date given"
            fetchedPost.author = post.author ? post.author : "No author given"
            fetchedPost.icon = post.icon ? post.icon : "bi-postcard"
            fetchedPost.content = post.content ? post.content : "No content given"
            postExists = true
        }
    })
    if (postExists === false) {
        return <h1>No page to display</h1>
    }
    return (
        <div className="row">
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h1><i className={`bi ${fetchedPost.icon}`} />  {fetchedPost.title}</h1>
                    </div>
                    <div className="card-body">
                        <small className="date">Published on {fetchedPost.date} by {fetchedPost.author}</small>
                        <Markdown children={fetchedPost.content} escapeHtml={false} />

                    </div>
                    <div className="card-footer">
                        <Link to="/">Back to home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;