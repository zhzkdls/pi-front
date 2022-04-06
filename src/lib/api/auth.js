import client from "./client";

// 로그인
export const login = ({ username, password }) =>
  client.post("login", { username, password });

// 회원가입
export const register = ({ username, userId, password, email, phone }) =>
  client.post("joinProc", {
    username,
    userId,
    password,
    email,
    phone,
  });

// 로그인 상태 확인
export const check = () => client.get("check");
