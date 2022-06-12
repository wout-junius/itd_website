import React, { useContext } from "react";
import { Routes, Route, useNavigate, NavLink } from "react-router-dom";
import { UserOutlined, SettingOutlined, ApiOutlined } from "@ant-design/icons";

import About from "./pages/About";
import Home from "./pages/Home";
import SearchPage from "./pages/Search";

import "./App.css";
import "antd/dist/antd.min.css";
import NotFound from "./pages/NotFound";

import { Layout, Menu, Input, Dropdown, Button } from "antd";

import Manufacturer from "./pages/Detailed/Manufacturer";
import Operator from "./pages/Detailed/Operator";
import TrainPage from "./pages/Detailed/TrainPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ApiManagment from "./pages/ApiManagment";
import { AuthContext } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const { Header, Content, Footer } = Layout;
const { Search } = Input;

function App() {
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
    <Layout className="layout">
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
      <Content
        style={{
          padding: "1.5em",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route
            path="/login"
            element={<ProtectedRoute isAuth={!ctx.user} element={<Login />} redirect="/" />}
          />

          <Route
            path="/register"
            element={
              <ProtectedRoute isAuth={!ctx.user} element={<Register />}  redirect="/"/>
            }
          />

          <Route
            path="/api/management"
            element={
              <ProtectedRoute isAuth={!!ctx.user} element={<ApiManagment />} />
            }
          />
          <Route path="/search/:query" element={<SearchPage />} />

          <Route path="/:type/:id" element={<TrainPage />} />
          <Route path="/manufacturer/:id" element={<Manufacturer />} />
          <Route path="/operator/:id" element={<Operator />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
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

export default App;
