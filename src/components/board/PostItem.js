import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PostItem.css'

class PostItem extends Component {
    render() {
        const { id, title, author, modifiedDate } = this.props;

        return (
            <div className='postItem'>
                <div>{id}</div>
                <div>
                    <Link to={`/posts/${id}`} className="link">{title}</Link>
                </div>
                <div>{author}</div>
                <div>{modifiedDate}</div>
            </div>
        )
    }
}

export default PostItem;