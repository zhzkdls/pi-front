import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/common/Header";
import { logout } from "../../modules/user";
import NavBar from "../layout/Navbar";

const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return <NavBar user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
