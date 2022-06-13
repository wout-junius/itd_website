import { Dropdown, Menu, Button, Input } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { UserOutlined, ApiOutlined, SettingOutlined } from '@ant-design/icons';
import { AuthContext } from '../context/AuthContext';
const { Search } = Input;

export default function NavBar() {
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);
  const menuPressed = (item: any) => {
    if (item.key === "Logout") {
      ctx.logout();
      navigate("/");
    } else {
      navigate(item.key);
    }
  };
  return (
    <Header
        style={{
          zIndex: 1,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1em",
        }}
      >
        <Search
          placeholder="Search trains ..."
          style={{ width: "25%" }}
          onSearch={(data) => {
            navigate("/search/" + data, { replace: true });
          }}
        />
        {ctx.user ? (
          <Dropdown overlay={<Menu onClick={menuPressed} items={items} />}>
            <Button type="link" onClick={(e) => e.preventDefault()}>
              <UserOutlined
                style={{
                  fontSize: "1.5em",
                  marginRight: "0.5em",
                  color: "#fff",
                }}
              />
            </Button>
          </Dropdown>
        ) : (
          loginMenu
        )}
      </Header>
  )
}

const items = [
  {
    label: "API management",
    key: "/api/management",
    icon: <ApiOutlined />,
  },
  {
    label: "Settings",
    key: "/settings",
    icon: <SettingOutlined />,
  },
  {
    label: "Account",
    key: "/account",
    icon: <UserOutlined />,
  },
  {
    label: "Logout",
    key: "Logout",
    icon: <ApiOutlined />,
  },
];

const loginMenu = (
  <div>
    <NavLink
      to="/login"
      style={{
        marginRight: "0.5em",
      }}
    >
      <Button type="primary">Login</Button>
    </NavLink>
    <NavLink to="/register">
      <Button type="primary">Register</Button>
    </NavLink>
  </div>
);