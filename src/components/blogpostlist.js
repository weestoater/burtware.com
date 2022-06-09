import React from "react"
import { Link }  from "react-router-dom"
import Markdown from "react-markdown"
import postlist from "../posts.json"
import moment from "moment";

const PostList = () => {

    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ") + "...";
    });

    return (
        <>
        {postlist.length && 
            postlist.slice(0,6).map((post, i) => {
                let formattedDate = moment(post.date).format("DD MMM 'YY");
                return (                      
                    <div className="col-lg-4" key={i}>
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className={`bi ${post.icon}`} /> {post.title}
                            </div>
                            <div className="card-body">
                                <small className="float-end date border-info p-1 ps-2 mt-0 mb-1">{formattedDate}</small>
                                <Markdown children={excerptList[i]}  />
                                <small><Link className="post-link" to={`/blog/${post.id}`}>Read {post.title} &rsaquo;</Link></small>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </>
    );
};

export default PostList