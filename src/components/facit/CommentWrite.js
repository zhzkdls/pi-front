// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const NewPost = () => {
//     const [pstgCn, setPstgCn] = useState(""); // 내용
//     const [stat, setStat] = useState(1); //삭제할떄 상태 값

//     const handleSubmit = () => {
//         if(pstgCn === '') alert('내용을 입력하세요');
//         else {
//             const body = {
//                 pstgCn: pstgCn,,
//                 stat: 1,
//             }
        

//             axios.post("http://localhost:8080/api/posts", body)
//             .then(async res => {
//                 console.log(res.data);
//                 document.location.href = "/post"
//             })
//             .catch(error => {
//                 console.log(error);
//             })
//         }
//     }

   
    
//     return (
//         <div>
// 			<form >
//               <div style={styles.form} encType="multipart/form-data">
//                 <input type="text" placeholder="이용후기를 입력 해주세요" className="form-control col-10"  />
//                 <button type="submit" className="input-group-text pointer btn-primary">평가입력</button>
//               </div>
//             </form>

//             <div style={styles.container}>
//                 <label style={styles.label}>작성자</label>
//                 <input style={styles.input} onChange={(e) => setPstgPblrName(e.target.value)} value={pstgPblrName}></input>
//             </div>
            
            
//             <textarea style={styles.textarea} onChange={(e) => setPstgCn(e.target.value)} value={pstgCn}></textarea>
            
            
//             <div>
//                 <button style={styles.okBtn} onClick={handleSubmit} >등록</button>
//                 <Link to="/post" style={styles.cancelBtn}>취소</Link>
//             </div>
//         </div>
//     )
// }

// const styles = {
//     form : {
//         position: 'absolute',
//         width: '100%',
//         marginTop: '5%',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     container: {
//         display: 'flex',
//         width: '60%',
//         justifyContent: 'center',
//         padding: '9px',
//         alignItems: 'center',
//         marginTop: '2px',
//     },
//     label: {
//         flex: 0.4,
//         textAlign: 'center'
//     },
//     input: {
//         flex: 0.6,
//         padding: '.3em .5em', /* 여백으로 높이설정 */
//     },
//     textarea: {
//         width: '60%',
//         height: '300px',
//         marginTop: '10px'
//     },
//     okBtn: {
//         width: '70px',
//         marginBottom: '50%',
//         marginLeft: '10px',
//         border: 'none',
//         fontSize: 'medium',
//         borderRadius: '3px',
//         color: '#f8f9fa',
//         background: '#367ED1',
//         padding: '.3em', /* 여백으로 높이설정 */
//     },
//     cancelBtn: {
//         width: '70px',
//         marginTop: '20px',
//         marginLeft: '10px',
//         border: '1px solid black',
//         fontSize: 'medium',
//         borderRadius: '3px',
//         color: '#f8f9fa',
//         background: '#C23932',
//         padding: '.3em', /* 여백으로 높이설정 */
//         textDecoration: 'none'
//     }
// }
// export default NewPost;