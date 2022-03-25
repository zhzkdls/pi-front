import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NewPost = () => {
    const [title, setTitle] = useState(''); // 제목
    const [content, setContent] = useState(''); // 내용
    const [author, setAutor] = useState(''); // 작성자
    const [files, setFile] = useState(null); // 첨부파일

    const handleFiles = (e) => {
        if(files === null) {
            setFile([e.target.files[0]]);
        }
        else {
            setFile([...files, e.target.files[0]]);
        }
    }
    const handleSubmit = () => {
        if(title === '' || content === '' || author === '') alert('모든 내용을 다 입력하세요');
        else {
            const body = {
                title: title,
                content: content,
                author: author
            }
            console.log(files);
            axios.post("/posts", body)
            .then(async res => {
                console.log(res.data);
                await uploadFiles(res.data); 
                document.location.href = "/"
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
    const uploadFiles = (boardId) => {
        console.log('들어옴');
        const formData = new FormData(); // 업로드할 파일
        formData.append("id", parseInt(boardId));
        files.forEach(file => formData.append("files", file));

        return new Promise((resolve, reject) => {
            axios.post("/upload", formData)
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                alert(error);
                reject();
            })
        })
    }
    
    return (
        <div style={styles.form} encType="multipart/form-data">
            <div style={styles.container}>
                <label style={styles.label}>제목</label>
                <input style={styles.input} onChange={(e) => setTitle(e.target.value)} value={title}></input>
            </div>
            <div style={styles.container}>
                <label style={styles.label}>작성자</label>
                <input style={styles.input} onChange={(e) => setAutor(e.target.value)} value={author}></input>
            </div>
            <textarea style={styles.textarea} onChange={(e) => setContent(e.target.value)} value={content}></textarea>
            <div style={styles.container}>
                <label style={styles.label}>첨부파일</label>
                <input style={styles.input} type="file" name="file" onChange={handleFiles}></input>
            </div>
            <div style={styles.container}>
                <label style={styles.label}>첨부파일</label>
                <input style={styles.input} type="file" name="file" onChange={handleFiles}></input>
            </div>
            <div>
                <button style={styles.okBtn} onClick={handleSubmit}>등록</button>
                <Link to="/" style={styles.cancelBtn}>취소</Link>
            </div>
        </div>
    )
}

const styles = {
    form : {
        position: 'absolute',
        width: '100%',
        marginTop: '5%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        display: 'flex',
        width: '60%',
        justifyContent: 'center',
        padding: '5px',
        alignItems: 'center',
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
        marginTop: '10px'
    },
    okBtn: {
        width: '70px',
        marginTop: '20px',
        marginLeft: '10px',
        border: 'none',
        fontSize: 'medium',
        borderRadius: '3px',
        color: '#f8f9fa',
        background: '#343a40',
        padding: '.3em', /* 여백으로 높이설정 */
    },
    cancelBtn: {
        width: '70px',
        marginTop: '20px',
        marginLeft: '10px',
        border: '1px solid black',
        fontSize: 'medium',
        borderRadius: '3px',
        color: '#343a40',
        background: '#f8f9fa',
        padding: '.3em', /* 여백으로 높이설정 */
        textDecoration: 'none'
    }
}
export default NewPost;