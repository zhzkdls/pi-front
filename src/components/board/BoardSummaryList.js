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
            ({pstgSeq, pstgTitle, pstgDt, pstgCn}) => (
                <BoardSummaryItem
                    pstgSeq = {pstgSeq}
                    pstgTitle = {pstgTitle}
                    pstgCn = {pstgCn}
                    pstgDt = {pstgDt}
                    key = {pstgSeq}
                />
                
            )
        )
        return (
            <div className="d-flex " >
            <div style = {styles.container}>
                {BoardSummaryList}
            </div>

            <div style = {styles.container}>
                {BoardSummaryList}
            </div>

            <div style = {styles.container}>
                {BoardSummaryList}
                </div>
            </div>

            
        )
    }
}

const styles = {
    container: {
        marginLeft: '20px',
        textAlign: 'center',
        width: '68%',
        borderBottom: '2px solid lightgray',
       
    },
   
}

export default BoardSummaryList;