import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PostItem.css'

class PostItem extends Component {
    render() {
        const { pstgSeq, pstgTitle, pstgPblrName, pstgDt } = this.props;

        return (
            <div className='postItem'>
                <div>{pstgSeq}</div>  {/* id값 => 일련번호 */}
                <div>
                    <Link to={`/posts/${pstgSeq}`} className="link">{pstgTitle}</Link>
                </div>
                <div>{pstgPblrName}</div>
                <div>{pstgDt}</div>
            </div>
        )
    }
}

export default PostItem;