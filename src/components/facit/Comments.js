import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Comments({ postId, refreash, setRefreash }) {
	const url = `http://localhost:8080/api/comment/getpost/`;
	const [comment, setComment] = useState([]);
	const [amount, setAmount] = useState(3);

	const delComment = (id) => {
		axios.delete(url + `/${id}`).then(setRefreash(true));
	}

	useEffect(() => {
		axios.get(url+`${postId}`).then(Response => setComment(Response.data)).then(setRefreash(false));
	}, [url, postId, refreash, setRefreash])

	if (comment.length < 1) {
		return null;
	}
	return (
		<div>
			<div className="table">
				<div className="d-flex justify-content-start bold">
					<div className="col-2">아이디</div>
					<div className="col-7">댓글</div>
					<div className="col-3">작성시간</div>
				</div>
				{
					comment.map(item => (
						<div key={item.id} className="d-flex justify-content-start">
							<div className="col-2">{item.userId}</div>
							<div className="col-7">{item.commentText}</div>
							
							<div className="pointer" onClick={() => delComment(item.id)}><i className="fa fa-times"></i></div>
						</div>
					)).slice(0, amount)
				}
			</div>
			<div className="d-flex justify-content-between">
				<button
					type="button"
					className={comment.length > amount ? "btn btn-primary mt-3" : "btn btn-secondary mt-3"}
					onClick={() => setAmount(amount + 3)}
				>
					{comment.length > amount ? "댓글 더 보기" : "댓글 끝"}
				</button>
				<button
					type="button"
					className={comment.length > 3 && amount > 3 ? "btn btn-outline-primary mt-3 d-inline" : "d-none"}
					onClick={() => setAmount(3)}
				>
					댓글 접기
				</button>
			</div>
		</div >
	);
}

export default Comments;