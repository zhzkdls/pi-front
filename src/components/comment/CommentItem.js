import React, {Component} from 'react';
import './Item.css'

class CommentItem extends Component {
    state = {}
    handleDelComment = () => {
        const { comment,index,delComment } =  this.props
        if(window.confirm(`삭제하시겠습니까?${comment.userId}`))
        delComment(index)

        const postUrl = `http://localhost:8080/comments/delete/${userId}`;

        axios.post(postUrl)
        .then(res => {
            window.location.href="/facit/:fcSeq"
        })
        .catch(error => {
          console.log(error);
        })
    }
    
    render() {
        const { comment } = this.props
        return (
            <div>
                <li className="list-group-item">
                    <div className="handle">
                        <a  className="btn btn-primary pull-right" href="javascript:;" onClick={this.handleDelComment}>삭제</a>
                    </div>
                    <p className="user"><span >{comment.userId}</span>&emsp;<span className="pik">내용:</span></p>
                    <p className="centence">{comment.content}</p>
                </li>
            </div>
        );
    }
}

export default CommentItem;