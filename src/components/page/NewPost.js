import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NewPost = () => {
    const [pstgTitle, setPstgTitle] = useState(); // 제목
    const [pstgPblrName, setPstgPblrName] = useState(""); // 작성자
    const [pstgCn, setPstgCn] = useState(""); // 내용
    const [stat, setStat] = useState(1); //삭제할떄 상태 값
    

    const handleSubmit = () => {
        if(pstgTitle === '' || pstgCn === '' || pstgPblrName === '') alert('모든 내용을 다 입력하세요');
        else {
            const body = {
                pstgTitle: pstgTitle,
                pstgCn: pstgCn,
                pstgPblrName: pstgPblrName,
                stat: 1,
            }

            axios.post("http://localhost:8080/api/posts", body)
            .then(async res => {
                console.log(res.data);
                // await uploadFiles(res.data); 
                document.location.href = "/post"
            })
            .catch(error => {
                console.log(error);
            })
        }
    }

   
    
    return (
        <div style={styles.form} encType="multipart/form-data">

            
            <div style={styles.container}>
                <label style={styles.label}>제목</label>
                <input style={styles.input} onChange={(e) => setPstgTitle(e.target.value)} value={pstgTitle}></input>
            </div>

            <div style={styles.container}>
                <label style={styles.label}>작성자</label>
                <input style={styles.input} onChange={(e) => setPstgPblrName(e.target.value)} value={pstgPblrName}></input>
            </div>
            
            
            <textarea style={styles.textarea} onChange={(e) => setPstgCn(e.target.value)} value={pstgCn}></textarea>
            
           
            <div>
                <button style={styles.okBtn} onClick={handleSubmit} >등록</button>
                <Link to="/post" style={styles.cancelBtn}>취소</Link>
            </div>
        </div>
    )
}

const styles = {
    form : {
        position: 'absolute',
        width: '100%',
        marginTop: '9%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        display: 'flex',
        width: '60%',
        justifyContent: 'center',
        padding: '9px',
        alignItems: 'center',
        marginTop: '30px',
    },
    label: {
        flex: 0.4,
        textAlign: 'center'
    },
    input: {
        flex: 0.6,
        padding: '.3em .5em', /* 여백으로 높이설정 */
    },
    textarea: {
        width: '60%',
        height: '300px',
        marginTop: '30px'
    },
    okBtn: {
        width: '70px',
        marginLeft: '10px',
        border: 'none',
        fontSize: 'medium',
        borderRadius: '3px',
        color: '#f8f9fa',
        background: '#367ED1',
        padding: '.5em', /* 여백으로 높이설정 */
    },
    cancelBtn: {
        width: '70px',
        marginLeft: '10px',
        border: '1px solid black',
        fontSize: 'medium',
        borderRadius: '3px',
        color: '#f8f9fa',
        background: '#C23932',
        padding: '.3em', /* 여백으로 높이설정 */
        textDecoration: 'none'
    }
}
export default NewPost;