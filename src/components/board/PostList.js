import React, { Component } from 'react';
import PostItem from './PostItem';

class PostList extends Component {
    // 리렌더링을 할 지 말지 결정 (기본값은 true)
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.posts !== nextProps.posts;
    }
    render() {
        const { posts } = this.props;

        const postList = posts.map(
            ({pstg_seq, pstg_title, pstg_pblr_name, pstg_dt, pstg_cn}) => (
                <PostItem
                    pstg_seq = {pstg_seq}
                    pstg_title = {pstg_title}
                    pstg_pblr_name = {pstg_pblr_name}
                    pstg_cn = {pstg_cn}
                    pstg_dt = {pstg_dt}
                    key = {pstg_seq}
                />
            )
        )
        return (
            <div>
                <div style= {styles.header}>
                    <p>일련번호</p>
                    <p>제목</p>
                    <p>작성자</p>
                    <p>작성일</p>
                </div>
                {postList}
            </div>
        )
    }
}

const styles = {
    header: {
        color: '#343a40',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        padding: '3px',
        borderBottom: '4px solid lightgray',
        textAlign: 'center',
        fontSize: '20px'
    }
}

export default PostList;