import React from "react"
import { Link }  from "react-router-dom"
import Markdown from "react-markdown"
import postsData from "../posts.json"
import moment from "moment";

import FullPostList from "../components/fullpostlist";
import BlogNavigation from "../components/global/BlogNavigation";

const Blog = (props) => {
    const validId = parseInt(props.match.params.id)
    let postExists = false;
    let formattedDate = '';
    const fetchedPost = {};

    postsData.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.title = post.title ? post.title : "No title given"
            fetchedPost.date = post.date ? post.date : "No date given"
            fetchedPost.author = post.author ? post.author : "No author given"
            fetchedPost.icon = post.icon ? post.icon : "bi-postcard"
            fetchedPost.image = post.image ? post.image : "No image given"
            fetchedPost.content = post.content ? post.content : "No content given"
            postExists = true
        }
        if (fetchedPost.date != "No date given" ) {
            formattedDate = moment(fetchedPost.date).format("dddd DD MMMM 'YY");
        }
    })

    return (
        <div className="row">
        {postExists &&
            <>
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h1><i className={`bi ${fetchedPost.icon}`} />  {fetchedPost.title}</h1>
                    </div>
                    <div className="card-body">
                        <small className="date">Published <b>{formattedDate}</b> by {fetchedPost.author}</small>
                        {fetchedPost.image !== 'No image given' && 
                        <img src={`../assets/${fetchedPost.image}`} alt="" className="rounded float-end img-thumbnail" /> }
                        <div className="blog-post">
                        <Markdown children={fetchedPost.content} />
                        </div>
                    </div>
                    <div className="card-footer">
                        <Link to="/">Back to home</Link> &middot; <Link to="/blog">Back to blog list</Link> 
                    </div>
                </div>
            </div>
            <div className="col-lg-3 offset-lg-1">
                <BlogNavigation />
            </div> 
            </>
        }

        {postExists == false &&
        <>
            <div className="col-sm-12">
                <h1 className="visually-hidden">Blog</h1>
            </div>
            <FullPostList />
        </>
        }
        </div>
    )
}

export default Blog;