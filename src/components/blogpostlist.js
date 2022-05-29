import React from "react"
import { Link }  from "react-router-dom"
import Markdown from "react-markdown"
import postlist from "../posts.json"


const PostList = () => {
    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 25).join(" ") + "..."
    })
    return (
        <>
        {postlist.length && 
            postlist.map((post, i) => {
                return (                      
                    <div className="col-lg-3 col-md-6" key={i}>
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className={`bi ${post.icon}`} /> {post.title}
                            </div>
                            <div className="card-body">
                                <Markdown children={excerptList[i]}  />
                                <br />
                                <small><Link className="post-link" to={`/blog/${post.id}`}>Read the full '{post.title}' post</Link></small>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </>
    )
}

export default PostList