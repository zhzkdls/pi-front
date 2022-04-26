import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {loginUser} from '../../_actions/user_action'
import { Card, Form, Button } from 'react-bootstrap';
import BlankAuth from '../layout/BlankAuth';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const FailedLogin = withReactContent(Swal);
  const MemberMissMatch = withReactContent(Swal);

  const onSubmit =(e) =>{
    e.preventDefault();

    if(userId.length === 0 || userPassword.length === 0) {
        FailedLogin.fire({
            title: "아이디 혹은 비밀번호를 입력해 주세요.",
            icon: 'warning',
          });
        return;
    }

    let body ={
        userId : userId,
        userPassword : userPassword 
    }

    dispatch(loginUser(body))
    .then(response => response.payload)
    .then(message => {
        if(message !== null){
            navigate("/");
        }else{
            MemberMissMatch.fire({
                title: "아이디 혹은 비밀번호를 확인해 주세요.",
                icon: 'error',
            });
        }
    });
  }

  return (
    <BlankAuth>
        <Card className="shadow-lg">
            <Card.Body className="p-5">
                    <h3>로그인</h3>
                    <Form noValidate onSubmit={onSubmit}>
                        <Form.Group className="mb-3">
                        <Form.Label className="text-muted">아이디</Form.Label>
                        <Form.Control
                            type="text"
                            name="userId"
                            required
                            placeholder="아이디 입력"
                            onChange={(e) => setUserId(e.target.value)} 
                            value={userId}
                        />
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Label className="text-muted">비밀번호</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            required
                            placeholder="비밀번호 입력"
                            onChange={(e) => setUserPassword(e.target.value)} 
                            value={userPassword}
                        />
                        <Form.Text className="float-end">
                            <Link to="/forgotpass">비밀번호를 잊으셨나요?</Link>
                        </Form.Text>
                        </Form.Group>
                        <div className="d-grid mt-5">
                            <Button variant="primary" size="lg" type="submit">로그인</Button>
                        </div>
                    </Form>
            </Card.Body>
            <Card.Footer className="py-3 text-muted text-center">
                계정이 없으신가요? <Link to="/register">회원가입</Link>
            </Card.Footer>
        </Card>
    </BlankAuth>
  )

}
export default LoginPage;