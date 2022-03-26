import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PostItem.css'

class PostItem extends Component {
    render() {
        const { pstg_seq, pstg_title, pstg_pblr_name, pstg_dt } = this.props;

        return (
            <div className='postItem'>
                <div>{pstg_seq}</div>  {/* id값 => 일련번호 */}
                <div>
                    <Link to={`/posts/${pstg_seq}`} className="link">{pstg_title}</Link>
                </div>
                <div>{pstg_pblr_name}</div>
                <div>{pstg_dt}</div>
            </div>
        )
    }
}

export default PostItem;