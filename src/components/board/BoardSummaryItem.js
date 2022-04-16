import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BoardSummaryItem extends Component {
    render() {
        const { pstgSeq, pstgTitle, pstgDt, pstgCn } = this.props;

        return (
          
                <div className="row">
                <div className="col-12 col-lg-4 px-lg-0">
                    <div className="card border-0">              
                    <div className="card-body">
                     {/* <div>{pstgSeq}</div>  */}
                    <div>
                        <Link style={{textDecoration:"none", color:"black"}} to={`/posts/${pstgSeq}`} className="font-weight-700 mb-3">{pstgTitle}</Link>
                    </div>
                    </div>              
                    </div>
                </div>
                <div className="text-truncate2 text-secondary" style={{height: "52px"}}>{pstgCn}</div>
                <div className="text-end">{pstgDt}</div>
                </div>
            
        )
    }
}

const styles = {
    notice: {
        backgroundColor: '#fff',
        position: 'absolute',
        left: '50%',
        bottom: '50px',
        transform: 'translate(-50%,0)',
        borderRadius: '15px'
        
    }
  }

export default BoardSummaryItem;