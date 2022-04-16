import React, { Component } from "react";
import BoardSummaryItem from './BoardSummaryItem';


class BoardSummaryList extends Component {
     // 리렌더링을 할 지 말지 결정 (기본값은 true)
     shouldComponentUpdate(nextProps, nextState) {
        return this.props.posts !== nextProps.posts;
    }
    render() {
        const { posts } = this.props;

        const BoardSummaryList = posts.map(
            ({pstgSeq, pstgTitle, pstgPblrName, pstgDt, pstgCn}) => (
                <BoardSummaryItem
                    pstgSeq = {pstgSeq}
                    pstgTitle = {pstgTitle}
                    pstgCn = {pstgCn}
                    pstgDt = {pstgDt}
                    pstgPblrName = {pstgPblrName}
                    key = {pstgSeq}
                />
                
            )
        )
        return (
            <div className="d-flex " >
            <div className='shadow' style = {styles.container}>
                <h3 style = {styles.title}>공지사항</h3>
                <div style= {styles.header}>
                {BoardSummaryList}
                </div>
            </div>

            <div className='shadow' style = {styles.container}>
                <h3 style = {styles.title}>공지사항</h3>
                <div style= {styles.header}>
                {BoardSummaryList}
                </div>
            </div>

            <div className='shadow' style = {styles.container}>
                <h3 style = {styles.title}>공지사항</h3>
                <div style= {styles.header}>
                {BoardSummaryList}
                </div>
            </div>
            </div>

            
        )
    }
}

const styles = {
    header: {
        gridTemplateColumns: 'repeat(3, 1fr)',
        borderBottom: '4px solid lightgray',
        textAlign: 'center',
        fontSize: '18px',
        width: '100%',
    },

    container: {
        marginLeft: '20px',
        textAlign: 'center',
        width: '68%',
        borderBottom: '2px solid lightgray',
    },
    title: {
        marginTop: '2px',
        marginBottom: '40px',
    },
}

export default BoardSummaryList;