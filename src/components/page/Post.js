import React, { Component } from 'react';
import PostList from '../board/PostList';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BOARDBACKEND } from '../../_actions/types';

class Post extends Component {
  state = {
    posts : []
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
  
    // 게시글 검색
    handleSearch = (keyword, type) => {
      const url = keyword !== '' ? `${BOARDBACKEND}:8083/api/search/` + keyword + "/post" + type
      : `${BOARDBACKEND}:8083/api/getAll`;
  
      this.handleGetList(url);
    }

    componentDidMount() {
      this.handleGetList(`${BOARDBACKEND}:8083/api/getAll`);
    }

    // 리렌더링을 할 지 말지 결정 (기본값은 true)
    shouldComponentUpdate(nextProps, nextState) {
      return this.state.posts !== nextState.posts;
    }
    render () {
      const { posts } = this.state;
      const { handleSearch } = this;
  
      return (
        <div>
          <PostList posts={posts}></PostList>
            <div style={styles.container}>
              <Link to="/write" style={styles.addBtn}> 등록</Link>
            </div>
        </div>
      );
    }
  }
  
  const styles = {
    container: {
      padding: '20px 0',
      textAlign: 'center',
      position: 'fixed',
      bottom: '120px',
      height: '10%', 
      width: '100%'
    },
    addBtn: {
      padding: '.6em', /* 여백으로 높이설정 */
      position: 'fixed',
      right: '17%',
      bottom: '81%',
      border: 'none',
      fontSize: 'medium',
      borderRadius: '6px',
      color: '#F6F8F9',
      background: '#483D8B',
      textDecoration: 'none'
    }
  }

  export default Post;