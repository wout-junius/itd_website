import React, { useContext, useState } from "react";

import "./../css/GeneralPage.css";
import LoginForm from "../components/loginForm";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { LOGIN_USER } from "../Graphql/AuthQueries";
import { Alert } from "antd";

export default function Login() {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const onFinish = (values: {email: string, password: string}) => {
    loginUser({
      variables: {
        loginInput: {
          email: values.email,
          password: values.password,
        },
      },
    });
  };

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      context.login(data.login.access_token);
      navigate("/");
    },
    onError: (error) => {
      setErrorMessage(error.message);
    }
  });
  return (
    <div className="background">
      <div
        className="content"
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <LoginForm onFinish={onFinish} errorMessage={errorMessage} />
      </div>
    </div>
  );
}

