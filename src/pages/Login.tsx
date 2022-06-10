import React from "react";

import "./../css/GeneralPage.css";
import LoginForm from "../components/loginForm";

export default function Login() {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="background">
      <div className="content" style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      }}>
        <LoginForm />
      </div>
    </div>
  );
}
