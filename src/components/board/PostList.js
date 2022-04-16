import React, { Component } from 'react';
import PostItem from './PostItem';
import Search from './Search';

class PostList extends Component {
    // 리렌더링을 할 지 말지 결정 (기본값은 true)
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.posts !== nextProps.posts;
    }
    render() {
        const { posts } = this.props;

        const postList = posts.map(
            ({pstgSeq, pstgTitle, pstgPblrName, pstgDt, pstgCn}) => (
                <PostItem
                    pstgSeq = {pstgSeq}
                    pstgTitle = {pstgTitle}
                    pstgPblrName = {pstgPblrName}
                    pstgCn = {pstgCn}
                    pstgDt = {pstgDt}
                    key = {pstgSeq}
                />
            )
        )
        return (
            <div className='shadow' style = {styles.container}>
                <h2 style = {styles.title}>공지사항</h2>
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
        fontSize: '20px',
        width: '100%',
    },

    container: {
        marginLeft: '310px',
        textAlign: 'center',
        width: '68%',
        borderBottom: '1px solid lightgray',
    },
    title: {
        marginTop: '120px',
        marginBottom: '40px',
        color: '#212529'
    },
}

export default PostList;