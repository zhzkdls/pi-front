import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
// import FileSaver from 'file-saver';

const PostDetail = () => {
    const navigate = useNavigate();
    const {pstgSeq} = useParams();
    const [pstgTitle, setPstgTitle] = useState('');
    const [pstgCn, setPstgCn] = useState('');
    const [pstgPblrName, setPstgPblrName] = useState('');
    const [isEdit, setEdit] = useState(false);
    const [stat, setStat] = useState(1);
    // const [files, setFiles] = useState([{
    //     pstg_seq: 0,
    //     fileOriName: '',
    //     fileName: ''
    // }]);

    useEffect(() => {
        getPost().then(data => {
            setPstgTitle(data.pstgTitle);
            setPstgCn(data.pstgCn);
            setPstgPblrName(data.pstgPblrName);
        });
        // getFiles().then(data => {
        //     // 파일 존재하는 경우 
        //     if(data.length !== 0) {
        //         setFiles(data);
        //     }
        // });
    }, [pstgSeq]);

    // 해당 게시글 내용 불러오기 
    const getPost = () => {
        // const url = "http://localhost:8080/api/find/" + pstg_seq;
        const url = `http://localhost:8080/api/find/${pstgSeq}`;
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

    // 해당 게시글에 포함된 첨부파일 불러오기 
    // const getFiles = () => {
    //     const url = "http://localhost:8080/api/getFile/" + pstg_seq;

    //     return new Promise((resolve, reject) => {
    //         axios.get(url)
    //         .then(res => {
    //             resolve(res.data);
    //         })
    //         .catch(error => {
    //             reject(error);
    //         })
    //     })
    // }

    // 게시글 삭제
    const handleDelete = () => {
        // const postUrl = "http://localhost:8080/api/delete/" + pstg_seq;
        const postUrl = `http://localhost:8080/api/delete/${pstgSeq}`;

        axios.post(postUrl)
        .then(res => {
            window.location.href="/post"
        })
        .catch(error => {
          console.log(error);
        })

        // // const fileUrl = "http://localhost:8080/api/delete/" + pstg_seq;
        // const fileUrl = `http://localhost:8080/api/delete/${pstg_seq}`;
        // axios.get(fileUrl)
        // .then(res => {
        //     // window.location.href="/"
        // }).catch();
    }

    // 게시글 수정
    const handleUpdate = () => {
        // const url = "http://localhost:8080/api/update/" + pstgSeq;
        const url = `http://localhost:8080/api/update/${pstgSeq}`;
        const body = { pstgTitle, pstgCn, stat, pstgPblrName, pstgSeq}
          
        axios.post(url, body)
        .then()
        
        .catch(error => {
          console.log(error);
        })
        setEdit(false);
    }

    // 첨부파일 다운로드
    // const downloadFile = (pstg_seq) => {
    //     const url = "http://localhost:8080/api/download/" + files[pstg_seq].fileName;

    //     axios.get(url, {
    //         headers: { responseType: 'arraybuffer' }
    //     }).then(res => {
    //         console.log(res);
    //         let file = new File([res], files[pstg_seq].fileOriName)
    //         FileSaver.saveAs(file);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // }

    return (
        <div style={styles.form}>
            <div style={styles.container}>
                <label style={styles.label}>제목</label>
                {
                    isEdit === false ? <div style={styles.pstg_cn}>{pstgTitle}</div>
                    : <input style={styles.pstg_cn} onChange={(e) => setPstgTitle(e.target.value)} value={pstgTitle}></input>
                }
            </div>

            <div style={styles.container}>
                <label style={styles.label}>작성자</label>
                {
                    isEdit === true ? <div style={styles.pstg_cn}>{pstgPblrName}</div>
                    : <input style={styles.pstg_cn} onChange={(e) => setPstgTitle(e.target.value)} value={pstgPblrName}></input>
                }
            </div>


            {
                isEdit === false ? <div style={styles.textarea}>{pstgCn}</div>
                :  <textarea style={styles.textarea} onChange={(e) => setPstgCn(e.target.value)} value={pstgCn}></textarea>
            }
            {/* {
                files.map((file, i) => 
                    <button key={i} style={styles.downloadBtn} type="file" onClick={() => downloadFile(i)}>{file.fileOriName}</button>
                )
            } */}
            <div>
                {
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
export default PostDetail;