import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../_reducers';
import { BOARDBACKEND } from '../../_actions/types';

const PostDetail = () => {
    const {pstgSeq} = useParams();
    const [pstgTitle, setPstgTitle] = useState('');
    const [pstgCn, setPstgCn] = useState('');
    const [pstgPblrName, setPstgPblrName] = useState('');
    const [isEdit, setEdit] = useState(false);
    const [stat, setStat] = useState(1);
    
    const user = useSelector(selectUser);

    useEffect(() => {
        getPost().then(data => {
            setPstgTitle(data.pstgTitle);
            setPstgCn(data.pstgCn);
            setPstgPblrName(data.pstgPblrName);
        });
    }, [pstgSeq]);

    // 해당 게시글 내용 불러오기 
    const getPost = () => {
        const url = `${BOARDBACKEND}/api/find/${pstgSeq}`;
        const body = {
            pstgTitle: pstgTitle,
            pstgCn: pstgCn,
            pstgPblrName: pstgPblrName,
            stat: 1,
        }

        return new Promise((resolve, reject) => {
            axios.get(url, body)
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                reject(error);
            })
        })
    }


    // 게시글 삭제
    const handleDelete = () => {
        const postUrl = `${BOARDBACKEND}/api/delete/${pstgSeq}`;

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
        const url = `${BOARDBACKEND}/api/update/${pstgSeq}`;
        const body = { pstgTitle, pstgCn, stat, pstgPblrName, pstgSeq}
          
        axios.post(url, body)
        .then()
        
        .catch(error => {
          console.log(error);
        })
        setEdit(false);
    }

  

    return (
        <div  style={styles.form} className='shadow'>
            <div style={styles.container}>
                <label style={styles.label}>제목:</label>
                {
                    isEdit === false ? <div style={styles.pstg_cn}>{pstgTitle}</div>
                    : <input style={styles.pstg_cn} className="form-control mx-auto my-3 py-3 rounded-4 " onChange={(e) => setPstgTitle(e.target.value)} value={pstgTitle}></input>
                }
            </div>

            <div style={styles.container}>
                <label style={styles.label}>이름:</label>
                {
                    isEdit === false ? <div style={styles.pstg_cn}>{pstgPblrName}</div>
                    : <input style={styles.pstg_cn} className="form-control mx-auto my-3 py-3 rounded-4 "  onChange={(e) => setPstgTitle(e.target.value)} value={pstgPblrName}></input>
                }
            </div>

            <div style={styles.container}>
                 <label style={styles.label}>내용:</label>  
            {
                isEdit === false ? <div style={styles.pstg_cn}>{pstgCn}</div>
                :  <textarea style={styles.pstg_cn} className="form-control mx-auto my-3 py-3 rounded-4 " rows="5" onChange={(e) => setPstgCn(e.target.value)} value={pstgCn}></textarea>
            }
            </div>
           
            <div>
                {user ? 
                (
                <>
                    {
                        user.role === "Admin" ? (
                            isEdit === false ? (
                                <div>
                                    <button style={styles.Btn} onClick={() => setEdit(true)}>수정</button>
                                    <button style={styles.Btn} onClick={() => handleDelete(pstgSeq)}>삭제</button>
                                    <Link to="/post" style={styles.cancelBtn}>목록</Link>
                                </div>
                            ) :
                            (
                                <div>
                                    <button style={styles.Btn} onClick={handleUpdate}>완료</button>
                                    <button style={styles.Btn} onClick={() => setEdit(false)}>취소</button>
                                </div>
                            )
                        ) : 
                        (
                        <>
                            <Link to="/post" style={styles.cancelBtn}>목록</Link>
                        </>
                    )}
                    </>
                ):(
                    <>
                        <Link to="/post" style={styles.cancelBtn}>목록</Link>
                    </>
                )}
            </div>
        </div>
    )
}

const styles = {
    form : {
        padding: '41px',
        position: 'absolute',
        marginLeft: '335px',
        width: '65%',
        marginTop: '10%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '30px',
    },
    container: {
        display: 'flex',
        width: '60%',
        justifyContent: 'center',
        padding: '9px',
        alignItems: 'center',
    },
    label: {
        // flex: 0.4,
        textAlign: 'center'
    },
    pstg_cn: {
        flex: 0.8,
        padding: '.3em .5em', /* 여백으로 높이설정 */
    },
    textarea: {
        width: '60%',
        height: '300px',
        marginTop: '30px'
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
export default PostDetail;