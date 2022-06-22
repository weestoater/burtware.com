import React from "react"
import { NavLink }  from "react-router-dom"
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
                                <NavLink to={`/blog/${post.id}`} activeClassName="active">
                                    <i className={`bi ${post.icon} me-2`} /> 
                                    <span className="title">{post.title}</span> &ndash;&nbsp; 
                                     <small>{formattedDate}</small>
                                </NavLink>
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