import React from "react"
import { Link }  from "react-router-dom"
import Markdown from "react-markdown"
import postlist from "../posts.json"
import moment from "moment";

const FullPostList = () => {
    const excerptList: any = postlist.map(post => {
        return post.content.split(" ").slice(0, 35).join(" ") + "..."
    })
    return (
        <>
        {postlist.length && 
            postlist.map((post, i) => {
                let formattedDate = moment(post.date).format("DD MMM 'YY");
                return (                      
                    <div className="col-lg-3 mb-2" key={i}>
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className={`bi ${post.icon}`} /><small>{formattedDate}</small> &middot; <b>{post.title}</b>
                            </div>
                            <div className="card-body">
                            {post.image !== 'No image given' && 
                                <img src={`../assets/${post.image}`} alt="" className="rounded img-thumbnail float-end" /> 
                            }

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