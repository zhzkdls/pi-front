import React, { Component } from 'react';
import axios from 'axios';
import BoardSummaryList from './BoardSummaryList';
import { BOARDBACKEND } from '../../_actions/types';

class BoardSummary extends Component {
    state = {
      posts : []
    }
    
    componentDidMount() {
      this.handleGetList(`${BOARDBACKEND}:8083/api/getAll`);
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
        return (
            <div>
                <BoardSummaryList posts={posts}/>
            </div>
        );
    }
}

export default BoardSummary;