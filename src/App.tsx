import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import SearchPage from "./pages/Search";

import "./App.css";
import "antd/dist/antd.min.css";
import NotFound from "./pages/NotFound";

import { Layout } from "antd";

import Manufacturer from "./pages/Detailed/Manufacturer";
import Operator from "./pages/Detailed/Operator";
import LocomotivePage from "./pages/Detailed/LocomotivePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ApiManagment from "./pages/ApiManagment";
import { AuthContext } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import NavBar from "./components/NavBar";
import MotorCoachPage from "./pages/Detailed/MotorCoachPage";
import WagonPage from "./pages/Detailed/WagonPage";

const { Content, Footer } = Layout;

function App() {
  const ctx = useContext(AuthContext);
  return (
    <Layout className="layout">
      <NavBar />
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
            element={
              <ProtectedRoute
                isAuth={!ctx.user}
                element={<Login />}
                redirect="/"
              />
            }
          />

          <Route
            path="/register"
            element={
              <ProtectedRoute
                isAuth={!ctx.user}
                element={<Register />}
                redirect="/"
              />
            }
          />

          <Route
            path="/api/management"
            element={
              <ProtectedRoute isAuth={!!ctx.user} element={<ApiManagment />} />
            }
          />
          <Route path="/search/:query" element={<SearchPage />} />

          <Route path="/locomotive/:id" element={<LocomotivePage />} />
          <Route path="/motor-coach/:id" element={<MotorCoachPage />} />
          <Route path="/wagon/:id" element={<WagonPage />} />
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

export default App;
