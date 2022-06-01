import React from "react"
import { Link }  from "react-router-dom"
import Markdown from "react-markdown"
import postlist from "../posts.json"


const FullPostList = () => {
    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ") + "..."
    })
    return (
        <>
        {postlist.length && 
            postlist.map((post, i) => {
                return (                      
                    <div className="col-lg-4" key={i}>
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className={`bi ${post.icon}`} /> <small>{post.date}</small> &middot; <b>{post.title}</b> 
                            </div>
                            <div className="card-body">
                                <Markdown children={excerptList[i]}  />
                                <small><Link className="post-link" to={`/blog/${post.id}`}>Read {post.title} &rsaquo;</Link></small>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </>
    )
}

export default FullPostList