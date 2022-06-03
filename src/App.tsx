import React from "react";
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { UserOutlined, SettingOutlined, ApiOutlined } from "@ant-design/icons";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import SearchPage from "./pages/Search";

import "./App.css";
import "antd/dist/antd.min.css";
import NotFound from "./pages/NotFound";

import { Layout, Menu, Input, Dropdown } from "antd";

import Manufacturer from "./pages/Detailed/Manufacturer";
import MotorCoach from "./pages/Detailed/MotorCoach";
import Operator from "./pages/Detailed/Operator";
import Wagon from "./pages/Detailed/Wagon";
import Locomotive from "./pages/Detailed/Locomotive";

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
          <a onClick={(e) => e.preventDefault()}>
            <UserOutlined
              style={{
                fontSize: "1.5em",
                marginRight: "0.5em",
                color: "#fff",
              }}
            />
          </a>
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/search/:query" element={<SearchPage />} />

          <Route path="/locomotive/:id" element={<Locomotive />} />
          <Route path="/Manufacturer/:id" element={<Manufacturer />} />
          <Route path="/MotorCoach/:id" element={<MotorCoach />} />
          <Route path="/Operator/:id" element={<Operator />} />
          <Route path="/Wagon/:id" element={<Wagon />} />

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
