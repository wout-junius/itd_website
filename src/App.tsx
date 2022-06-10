import React from "react";
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
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

const { Header, Content, Footer } = Layout;
const { Search } = Input;

function App() {
  const navigate = useNavigate();
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
        <Dropdown overlay={menu}>
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
      </Header>
      <Content
        style={{
          padding: "1.5em",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/api/management" element={<ApiManagment />} />


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

const menu = (
  <Menu
    items={[
      {
        label: "API management",
        key: "1",
        icon: <ApiOutlined />,
      },
      {
        label: "Settings",
        key: "2",
        icon: <SettingOutlined />,
      },
      {
        label: "Account",
        key: "3",
        icon: <UserOutlined />,
      },
    ]}
  />
);

export default App;
