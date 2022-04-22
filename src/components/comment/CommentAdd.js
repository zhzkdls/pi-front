import React, { useState } from 'react';
import axios from 'axios';

const CommentAdd = () => {

    const [userId, setUserId] = useState(""); // 작성자
    const [content, setContent] = useState(""); // 내용
    const [stat, setStat] = useState(1); //삭제할떄 상태 값

    const handleAdd = ()=>{
        const body = {
            userId: userId,
            content: content,
            stat: 1,
        }
        axios.post("http://192.168.0.36:8080/comments/add", body)
            .then(async res => {
                // response  
                console.log(res.data);
                document.location.href = "/facit/:fcSeq "
            })
            .catch(error => {
                console.log(error);
                // 오류발생시 실행
            })
    }

        return (
            <div className="col-md-111">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>작성자</label>
                        <input type="text" className="form-control mx-auto my-3 py-3 rounded-4 shadow" placeholder="작성자" 
                            onChange={(e) => setUserId(e.target.value)} value={userId}></input>
                    </div>
                    <div className="form-group">
                        <label>내용</label>
                        <textarea className="form-control mx-auto my-3 py-3 rounded-4 shadow" rows="6" placeholder="이용후기를 입력 하세요"
                            onChange={(e) => setContent(e.target.value)} value={content} ></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button"  className="btn btn-primary pull-right" onClick={handleAdd}>평가 입력</button>
                        </div>
                    </div>
                </form>
            </div>
        );
}

export default CommentAdd;