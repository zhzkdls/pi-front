import React, { Component } from 'react';
import axios from 'axios';
import BoardSummaryList from './BoardSummaryList';

class BoardSummary extends Component {
    state = {
      posts : []
    }
    
    componentDidMount() {
      this.handleGetList("http://localhost:8080/api/getAll");
    }
     // 게시글 목록 불러오기 
     handleGetList = (url) => {

        axios.get(url)
        .then(res => {
          this.setState({
            posts: res.data
          })
        })
        .catch(error => {
          console.log(error);
        });
      } 

      // 리렌더링을 할 지 말지 결정 (기본값은 true)
    shouldComponentUpdate(nextProps, nextState) {
        return this.state.posts !== nextState.posts;
      }
      render () {
        const { posts } = this.state;
        console.log(posts);

        return (
            <div>
                <BoardSummaryList posts={posts}/>
            </div>
        );
    }
}

export default BoardSummary;