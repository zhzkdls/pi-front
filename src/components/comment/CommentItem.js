import { Button } from '@mui/material';
import React, {Component} from 'react';
import './Item.css'

class CommentItem extends Component {
    state = {}
    handleDelComment = () => {
        const { comment,index,delComment } =  this.props
        if(window.confirm(`삭제하시겠습니까?${comment.userId}`))
        delComment(index)
    }
    
    render() {
        const { comment } = this.props
        return (
            <div>
                <li className="list-group-item">
                    <div className="handle">
                        <a><Button onClick={this.handleDelComment} variant="primary" >🔥삭제</Button></a>
                    </div>
                    <p className="user">
                        <span >{comment.userId}</span>
                        &emsp;<span className="pik">내용:
                        </span>
                    </p>
                    <p className="centence">{comment.content}</p>
                </li>
            </div>
        );
    }
}

export default CommentItem;