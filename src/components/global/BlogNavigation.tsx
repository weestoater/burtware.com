import React from "react"
import { Link }  from "react-router-dom"
import postlist from "../../posts.json"
import moment from "moment";

const BlogNavigation = () => {

    return (
        <nav role="menu">
            <div className="card">
                <div className="card-header">
                    <h2>Previous posts...</h2>
                </div>
                <div className="card-body">
                    <ul className="blog-nav-list">
                    {postlist.length && 
                        postlist.map((post, i) => {
                        let formattedDate = moment(post.date).format("DD:MM:yyyy");
                        return (
                            <li key={i}>
                                <Link to={`/blog/${post.id}`}>
                                    <i className={`bi ${post.icon} me-2`} /> 
                                    <span className="title">{post.title}</span> &ndash;&nbsp; 
                                     <small>{formattedDate}</small>
                                </Link>
                            </li>
                        )
                    })
                    }
                    </ul>
                </div>                            
            </div>
        </nav>
    );
};

export default BlogNavigation