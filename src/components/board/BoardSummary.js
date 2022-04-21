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
          // console.log(error);
        });
      } 

      // 리렌더링을 할 지 말지 결정 (기본값은 true)
    shouldComponentUpdate(nextProps, nextState) {
        return this.state.posts !== nextState.posts;
      }
      render () {
        const { posts } = this.state;
        // console.log(posts);

        return (
            <div>
                <BoardSummaryList posts={posts}/>
            </div>
        );
    }
}

export default BoardSummary;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {useParams } from 'react-router-dom';

// const BoardSummary = () => {
//     const {pstgSeq} = useParams();
//     const [pstgTitle, setPstgTitle] = useState('');
//     const [pstgCn, setPstgCn] = useState('');
//     const [isEdit, setEdit] = useState(false);
    

//     useEffect(() => {
//         getPost().then(data => {
//             setPstgTitle(data.pstgTitle);
//             setPstgCn(data.pstgCn);
//         });
//     }, [pstgSeq]);

//     // 해당 게시글 내용 불러오기 
//     const getPost = () => {
//         const url = `http://localhost:8080/api/find/${pstgSeq}`;
//         const body = {
//             pstgTitle: pstgTitle,
//             pstgCn: pstgCn,
//         }

//         return new Promise((resolve, reject) => {
//             axios.get(url, body)
//             .then(res => {
//                 resolve(res.data);
//             })
//             .catch(error => {
//                 reject(error);
//             })
//         })
//     }

//     return (
//         <div  style={styles.form} className='shadow'>
//             <div style={styles.container}>
//                 <label style={styles.label}>제목:</label>
//                 {
//                     isEdit === false ? <div style={styles.pstg_cn}>{pstgTitle}</div>
//                     : <input style={styles.pstg_cn} className="form-control mx-auto my-3 py-3 rounded-4 " onChange={(e) => setPstgTitle(e.target.value)} value={pstgTitle}></input>
//                 }
//             </div>

//             <div style={styles.container}>
//                  <label style={styles.label}>내용:</label>  
//             {
//                 isEdit === false ? <div style={styles.pstg_cn}>{pstgCn}</div>
//                 :  <textarea style={styles.pstg_cn} className="form-control mx-auto my-3 py-3 rounded-4 " rows="5" onChange={(e) => setPstgCn(e.target.value)} value={pstgCn}></textarea>
//             }
//             </div>
           
           
//         </div>
//     )
// }

// const styles = {
//     form : {
//         padding: '41px',
//         position: 'absolute',
//         marginLeft: '335px',
//         width: '65%',
//         marginTop: '10%',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         borderRadius: '30px',
//     },
//     container: {
//         display: 'flex',
//         width: '60%',
//         justifyContent: 'center',
//         padding: '9px',
//         alignItems: 'center',
//     },
//     label: {
//         // flex: 0.4,
//         textAlign: 'center'
//     },
//     pstg_cn: {
//         flex: 0.8,
//         padding: '.3em .5em', /* 여백으로 높이설정 */
//     },
//     textarea: {
//         width: '60%',
//         height: '300px',
//         marginTop: '30px'
//     },
//     Btn: {
//         width: '70px',
//         marginTop: '20px',
//         marginBottom: '50%',
//         marginLeft: '10px',
//         border: 'none',
//         fontSize: 'medium',
//         borderRadius: '3px',
//         color: '#f8f9fa',
//         background: '#343a40',
//         padding: '.3em', /* 여백으로 높이설정 */
//     },
//     cancelBtn: {
//         width: '70px',
//         marginTop: '20px',
//         marginLeft: '10px',
//         border: '1px solid black',
//         fontSize: 'medium',
//         borderRadius: '3px',
//         color: '#343a40',
//         background: '#f8f9fa',
//         padding: '.3em', /* 여백으로 높이설정 */
//         textDecoration: 'none'
//     },
//     downloadBtn: {
//         border: 'none',
//         background: 'white',
//         marginBottom: '10px'
//     }
// }
// export default BoardSummary;