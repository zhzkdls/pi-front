import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PostItem.css'

class BoardSummaryItem extends Component {
    render() {
        const { pstgSeq, pstgTitle, pstgDt, pstgCn } = this.props;

        return (
            <div className='BoardSummaryItem'>
                {/* <div>{pstgSeq}</div>  */}
                <div>
                    <Link to={`/posts/${pstgSeq}`} className="linke">{pstgTitle}</Link>
                </div><br/>
                <div>{pstgCn}</div><br/>
                <div>{pstgDt}</div>
            </div>
        )
    }
}

export default BoardSummaryItem;