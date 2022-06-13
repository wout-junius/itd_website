import React, { useContext, useState } from "react";
import { Form, Input, Button, Alert } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import "./../css/GeneralPage.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../Graphql/AuthQueries";
import { AuthContext } from "../context/AuthContext";

function Register() {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  let formValue: any = {};
  const [errorMessage, setErrorMessage] = useState("");

  const onFinish = (values: any) => {
    registerUser({
      variables: {
        createUserInput: {
          username: values?.username,
          password: values?.password,
          email: values?.email,
        },
      },
    });
    console.log(formValue, values);
  };

  const [registerUser] = useMutation(REGISTER_USER, {
    onCompleted: (data) => {
      context.login(data.registerUser.access_token);
      navigate("/");
    },
    onError: (error) => {
      setErrorMessage(error.message);
    },
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
        <div>
          <h1>Register</h1>
          {error(errorMessage)}
          <Form
            name="register"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please input a valid email!" },
              ]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email"
                type="email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item
              name="passwordRepeat"
              rules={[
                { required: true, message: "Repeat your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Repeat password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{
                  marginRight: "0.5em",
                }}
              >
                Register
              </Button>
              Already have an account? <NavLink to="/login">login</NavLink>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

const error = (error: string | undefined) => {
  if (error) {
    return (
      <Alert
        message={error}
        type="error"
        showIcon
        style={{
          marginBottom: "1em",
        }}
      />
    );
  }
};

export default Register;
