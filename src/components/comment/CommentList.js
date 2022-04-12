import React, {Component} from 'react';
import CommentItem from './CommentItem';
import './List.css';

class CommentList extends Component {
    //구성 요소에 지정된 속성 분류 정의
    render() {
        const { comments,delComment } = this.props
        const display = comments.length === 0 ? 'block':'none'
        return (
            <div className="col-md-8">
                <h3 className="reply"></h3>
                <h2 style={{display}}>이용후기가 없습니다. 윗쪽을 클릭하여 이용후기를 등록 하세요.</h2>
                <ul className="list-group mx-auto my-1 py-3 rounded-5 shadow">
                    {
                        comments.map((item,index)=><CommentItem key={index} comment={item} index={index} delComment={delComment} />)
                    }
                </ul>
            </div>
        );
    }
}

export default CommentList;