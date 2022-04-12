import React, { Component } from 'react';
import CommentAdd from './CommentAdd';
import CommentList from './CommentList';
import axios from 'axios';

class Comment extends Component {

    state = {
        comments:[
            {userId:'쌈디',content:'잘하자?'},
            {userId:'아이린',content:'그러게?'},
            {userId:'김하영',content:'합격?'},
        ]
    }
    
    componentDidMount() {
      this.handleGetList("http://localhost:8080/comments/getAll");
    }
     // 게시글 목록 불러오기 
     handleGetList = (url) => {

        axios.get(url)
        .then(res => {
          this.setState({
            comments: res.data
          })
        })
        .catch(error => {
          console.log(error);
        });
      }
  

    addComment = (comment)=>{
        const { comments } = this.state
        //여기 comments여러 그룹에 데이터를 새로 추가하다.
        comments.unshift(comment)
        //상태 업데이트
        this.setState({comments})
    }
    delComment = (index)=>{
        const { comments } = this.state
        comments.splice(index,1)
        this.setState({comments})
    }
    render() {
        const { comments } = this.state
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                        <div className="col-xs-12">
                        </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd addComment={ this.addComment } />
                    <CommentList comments={ comments } delComment={ this.delComment } />
                </div>
            </div>
        );
    }
}

export default Comment;