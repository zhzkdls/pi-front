import React, { useState, useEffect } from 'react';
import PostList from '../board/PostList';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BOARDBACKEND } from '../../_actions/types';
import { useSelector } from 'react-redux';
import { selectUser } from '../../_reducers';

function Post() {
    const [posts, setPosts] = useState([]);

    const user = useSelector(selectUser);

    useEffect(() => {
        axios.get(`${BOARDBACKEND}/api/getAll`)
        .then(res => {
          setPosts(res.data);
        })
        .catch(error => {
        console.log(error);
        });
    }, []);

    return (
      <div>
        <PostList posts={posts}></PostList>
        {user ? (
          <>
            {user.role === "Admin" ? (
              <div style={styles.container}>
                <Link to="/write" style={styles.addBtn}> 등록</Link>
              </div>
            ):
            (
              <></>
            )}
          </>
        )
        :
        (
          <></>
        )}
      </div>
    );
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