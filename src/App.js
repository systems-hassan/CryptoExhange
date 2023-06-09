import { ConfigProvider, theme } from "antd";
import 'antd/dist/reset.css';
import React, { useEffect, useState } from "react";
import "./App.css";
import LoginPage from "./pages/login/page";
import Darktheme from './themes/dark.json';
import SignupForm from "./pages/signup/page";

const App = () => {
  const [page, setPage] = useState();
  useEffect(() => {
    const page = window.location.href;
    setPage(page.replace("http://localhost:3000", ""));
  }, []);
  return (
    <ConfigProvider theme={{ ...Darktheme, algorithm: theme.darkAlgorithm }}>
      {(() => {
        switch(page) {
          case "/":
            return <LoginPage />
          case "/login":
            return <LoginPage />
          case "/signup":
            return <SignupForm />
          default:
            return <LoginPage />
        }
      })()}
    </ConfigProvider>
  );
};

export default App;
