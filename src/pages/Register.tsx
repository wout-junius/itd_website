import React from "react";
import PropTypes from "prop-types";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import "./../css/GeneralPage.css";
import { NavLink } from "react-router-dom";

function Register() {
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
          <Form name="register" initialValues={{ remember: true }}>
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
              rules={[{ required: true, message: "Please input your email!" }]}
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
              rules={[{ required: true, message: "Repeat your password!" }]}
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

export default Register;
