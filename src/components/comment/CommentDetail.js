import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const CommentDetail = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [userId, setUserId] = useState('');
    const [content, setContent] = useState('');
    const [isEdit, setEdit] = useState(false);
    const [stat, setStat] = useState(1);
    

    useEffect(() => {
        getPost().then(data => {
            setUserId(data.userId);
            setContent(data.content);
        });
    }, [id]);


    // 게시글 삭제
    const handleDelete = () => {
        const postUrl = `http://localhost:8080/comments/delete/${id}`;

        axios.post(postUrl)
        .then(res => {
            window.location.href="/post"
        })
        .catch(error => {
          console.log(error);
        })
    }

    // 게시글 수정
    const handleUpdate = () => {
        const url = `http://localhost:8080/comments/update/${id}`;
        const body = { userId, content, stat, id}
          
        axios.post(url, body)
        .then()
        
        .catch(error => {
          console.log(error);
        })
        setEdit(false);
    }

    return (
        <div style={styles.form}>
            <div style={styles.container}>
                <label style={styles.label}>작성자</label>
                {
                    isEdit === true ? <div style={styles.pstg_cn}>{userId}</div>
                    : <input style={styles.pstg_cn} onChange={(e) => setUserId(e.target.value)} value={userId}></input>
                }
            </div>


            {
                isEdit === false ? <div style={styles.textarea}>{content}</div>
                :  <textarea style={styles.textarea} onChange={(e) => setContent(e.target.value)} value={content}></textarea>
            }
          
            <div>
                {
                    isEdit === false ? (
                        <div>
                            <button style={styles.Btn} onClick={() => setEdit(true)}>수정</button>
                            <button style={styles.Btn} onClick={() => handleDelete(id)}>삭제</button>
                            <Link to="/post" style={styles.cancelBtn}>목록</Link>
                        </div>
                    ) :
                    (
                        <div>
                            <button style={styles.Btn} onClick={handleUpdate}>완료</button>
                            <button style={styles.Btn} onClick={() => setEdit(false)}>취소</button>
                        </div>
                    )
                }
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
    pstg_cn: {
        flex: 0.6,
        padding: '.3em .5em', /* 여백으로 높이설정 */
    },
    textarea: {
        width: '60%',
        height: '300px',
        marginTop: '10px'
    },
    Btn: {
        width: '70px',
        marginTop: '20px',
        marginBottom: '50%',
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
    },
    downloadBtn: {
        border: 'none',
        background: 'white',
        marginBottom: '10px'
    }
}
export default CommentDetail;