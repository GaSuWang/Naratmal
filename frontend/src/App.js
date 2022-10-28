import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import KakaoLogin from "./components/Login/KakaoLogin.jsx";
import MainPage from "./pages/MainPage.jsx";
import "../src/styles/Common/App.scss";
import TopNav from "./components/Common/TopNav.jsx";
import Footer from "./components/Common/Footer.jsx";
import FontSearchPage from "./pages/FontSearchPage.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/oauth/callback/kakao" element={<KakaoLogin />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/search" element={<FontSearchPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;