import { Button, Form, Input } from "antd";
import React from "react";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { NavLink } from "react-router-dom";

export default function loginForm() {
  return (
    <div>
      <h1>Login</h1>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
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
            Log in
          </Button>
          Or <NavLink to="/register">register now!</NavLink>
        </Form.Item>
      </Form>
    </div>
  );
}
