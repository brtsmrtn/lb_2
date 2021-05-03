import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../features/user";

export const Login: () => JSX.Element = () => {
  const dispatch = useDispatch();
  return (
    <Link
      to="/"
      onClick={() => {
        dispatch(loginUser());
      }}
    >
      Sign In with Google
    </Link>
  );
};
