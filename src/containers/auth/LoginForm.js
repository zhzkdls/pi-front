import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { changeField, initializeForm, login } from "../../modules/auth";
import Login from "../../components/auth/Login";
import { check } from "../../modules/user";
import axios from "axios";

const LoginForm = ({ history }) => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const [loginAttempt, setLoginAttempt] = useState({
    userId:"",
    userPassword:"",
  })



  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "login",
        key: name,
        value,
      })
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    const { userId, password } = form;
    if (
      [userId, password].length === 0
    ) {
      setError("빈 칸을 모두 입력하세요.");
      return;
    }

    loginAttempt.userId = form.userId;
    loginAttempt.userPassword = form.password;

    axios.post("http://localhost:8080/login/Attempt", loginAttempt)
    .then(response => response.text())
    .then(message => {
      console.log(message);
      console.log(loginAttempt.userId);
      console.log(loginAttempt.userPassword);
      if(message === "true"){
        alert("아이디 비밀번호 일치");
        navigate("/");
      }
  });

    dispatch(login({ userId, password }));
  };

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log("오류 발생");
      console.log(authError);
      setError("로그인 실패");
      return;
    }
    if (auth) {
      console.log("로그인 성공");
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      navigate("/");
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("localStorage is not working");
      }
    }
  }, [history, navigate, user]);

  return (
    <Login
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default LoginForm;
