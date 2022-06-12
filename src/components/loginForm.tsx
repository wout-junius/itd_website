import { Alert, Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

export default function loginForm({
  errorMessage,
  onFinish,
}: {
  onFinish: (values: any) => void;
  errorMessage: string;
}) {
  return (
    <div>
      <h1>Login</h1>

      {error(errorMessage)}
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please input your Email!" },
            { type: "email", message: "Please input a valid email address" },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            type="email"
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
