import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, register } from "../../modules/auth";
import AuthForm from "../../components/auth/AuthForm";
import { check } from "../../modules/user";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


const RegisterForm = ({ history }) => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const [member, setMember] = useState({
    userName: "",
    userId: "",
    userPassword:"",
    userEmail:"",
    userPhone:"",
    role:1,
    stat:1,
  });

  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "register",
        key: name,
        value,
      })
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm, userId, email, phone } = form;
    // 하나라도 비어있다면
    if (
      [username, password, passwordConfirm, userId, email, phone].length === 0
    ) {
      setError("빈 칸을 모두 입력하세요.");
      return;
    }

    // 비밀번호가 일치하지 않는다면
    if (password !== passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      dispatch(changeField({ form: "register", key: "password", value: "" }));
      dispatch(
        changeField({ form: "register", key: "passwordConfirm", value: "" })
      );
      return;
    }

    member.userName = form.username;
    member.userId = form.userId;
    member.userPassword = form.password;
    member.userPhone = form.phone;
    member.userEmail = form.email;

    //fetch("http://localhost:8080/member/save", {
      fetch("http://192.168.0.36:8080/member/save", {  
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(member),
    })
    .then(response => response.text())
    .then(message => {
      if(message === "Success"){
        alert("가입 되었습니다.");
        alert("로그인 페이지로 이동합니다.");
        navigate("/login");
      }else if(message === "0"){
        alert("해당 이메일로 가입된 계정이 있습니다.");
      }else if(message === "1"){
        alert("해당 아이디로 가입된 계정이 있습니다.");
      }else if(message === "2"){
        alert("해당 전화번호로 가입된 계정이 있습니다.");
      }
  });
    dispatch(register({ username, password, email, phone }));
  };

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default RegisterForm;
