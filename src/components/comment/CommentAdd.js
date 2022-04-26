import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUser } from '../../_reducers';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { BOARDBACKEND } from '../../_actions/types';

const CommentAdd = () => {

    const user = useSelector(selectUser);
    const NoUser = withReactContent(Swal);

    const [content, setContent] = useState(""); // 내용

    const handleAdd = ()=>{
        const body = {
            userId: user.userId,
            content: content,
            stat: 1,
        }
        axios.post(`${BOARDBACKEND}/comments/add`, body)
            .then(async res => {
                document.location.href = "/facit/fcSeq "
            })
            .catch(error => {
                console.log(error);
            })
    }

    const NoLogin = () => {
        NoUser.fire({
          title: "시간을 선택해 주세요!",
          text:"로그인 후 이용해 주세요!",
          icon: 'error',
        });
    }

    return (
        <div className="col-md-111">
            <form className="form-horizontal">
                <div className="form-group">
                    {user ? 
                    (
                    <>
                        <label>작성자</label>
                        <input type="text" className="form-control mx-auto my-3 py-3 rounded-4 shadow"
                            onChange={(e) => setUserId(e.target.value)} value={user.userId} disabled></input>
                    </>
                    ):
                    (
                    <>
                        <label>작성자</label>
                        <input type="text" className="form-control mx-auto my-3 py-3 rounded-4 shadow"
                            onChange={(e) => setUserId(e.target.value)} value="로그인 후 이용하실 수 있습니다." disabled></input>
                    </>
                    )
                    }
                </div>
                <div className="form-group">
                    <label>내용</label>
                    <textarea className="form-control mx-auto my-3 py-3 rounded-4 shadow" rows="6" placeholder="이용후기를 입력 하세요"
                        onChange={(e) => setContent(e.target.value)} value={content} ></textarea>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        {user ? (
                            <button type="button"  className="btn btn-primary pull-right" onClick={handleAdd}>평가 입력</button>
                        ):
                        (
                            <button type="button"  className="btn btn-primary pull-right" onClick={NoLogin} disabled>평가 입력</button>
                        )
                        }
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CommentAdd;