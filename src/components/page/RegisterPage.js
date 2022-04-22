import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BlankAuth from '../layout/BlankAuth';
import { Card, Form, Button } from 'react-bootstrap';
import {registerUser} from '../../_actions/user_action'
import {useDispatch} from 'react-redux';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [member, setMember] = useState();
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const SuccessSubmit = withReactContent(Swal);
  const FailedSubmit = withReactContent(Swal);
  const PasswordMissMatch = withReactContent(Swal);
  const Blankdetection = withReactContent(Swal);

  const handleChange = e => {
    const { name, value } = e.target;
    setMember({
        ...member,
        [name]: value,
    });
  };

  const fillConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    let body = {
      userName : member.userName,
      userId : member.userId,
      userPassword : member.userPassword,
      userEmail : member.userEmail,
      userPhone : member.userPhone,
      role:"User",
      stat : 1
    }

    if(!body.userName || !body.userId || !body.userPassword || !body.userPhone || !body.role || !body.stat){
      Blankdetection.fire({
        title: "빈칸을 모두 채워주세요!",
        icon: 'warning',
      });
    }else if(body.userPassword !== ConfirmPassword){
      PasswordMissMatch.fire({
        title: "비밀번호가 서로 다릅니다!",
        text: "비밀번호를 확인해 주세요!",
        icon: 'warning',
      });
    } else {
        dispatch(registerUser(body))
        .then(response =>{
          if(response.payload === "Success"){
            SuccessSubmit.fire({
              title: "회원가입이 완료되었습니다!",
              text: "로그인 페이지로 이동합니다.",
              icon: 'success',
            });
            navigate('/login');
          } else{
            FailedSubmit.fire({
              title: "회원가입이 실패했습니다!",
              text: response.payload,
              icon: 'error',
            });
          }
        })
      }
  };

  function numberMaxLength(e){
    if(e.target.value.length > e.target.maxLength){
        e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
  } 

  return (
    <>
      <BlankAuth>
        <Card className="shadow-lg">
          <Card.Body className="p-5">
            <Card.Title className="fs-3 fw-bold mb-4">회원가입</Card.Title>
            <Form onSubmit={onSubmit}>

              <Form.Group className="mb-3">
                <Form.Label className="text-muted">이름</Form.Label>
                <Form.Control
                  type="text"
                  name="userName"
                  minLength={2}
                  maxLength={20}
                  required
                  placeholder='이름을 입력해 주세요'
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="text-muted">아이디</Form.Label>
                <Form.Control
                  type="text"
                  name="userId"
                  required
                  minLength={6}
                  maxLength={20}
                  placeholder='아이디를 입력해 주세요 (6자 이상)'
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="text-muted">비밀번호</Form.Label>
                <Form.Control
                  type="password"
                  name="userPassword"
                  minLength={6}
                  maxLength={20}
                  required
                  placeholder='비밀번호를 입력해 주세요 (6자 이상)'
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="text-muted">비밀번호 확인</Form.Label>
                <Form.Control
                  type="password"
                  minLength={6}
                  required
                  value={ConfirmPassword}
                  onChange={fillConfirmPassword}
                  placeholder='비밀번호 확인'
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="text-muted">이메일</Form.Label>
                <Form.Control
                  type="email"
                  name="userEmail"
                  required
                  placeholder='이메일을 입력해 주세요'
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="text-muted">전화번호</Form.Label>
                <Form.Control
                  style={{}}
                  type="number"
                  name="userPhone"
                  minLength={10}
                  maxLength={11}
                  required
                  placeholder='전화번호를 입력해 주세요'
                  onInput={numberMaxLength}
                  onChange={handleChange}
                />
              </Form.Group>

              <div className="d-grid mt-5">
                <Button variant="primary" size="lg" type="submit">
                  회원가입
                </Button>
              </div>

            </Form>
          </Card.Body>

          <Card.Footer className="py-3 text-muted text-center">
            이미 계정이 있으신가요? <Link to="/login">로그인</Link>
          </Card.Footer>

        </Card>
      </BlankAuth>
    </>
  );
};
export default RegisterPage;