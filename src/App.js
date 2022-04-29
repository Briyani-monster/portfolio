import Aboutme from "./Components/Aboutme";
import { Header } from "./Components/Header";
import Hero from "./Components/Hero";
import JavascriptApiProject from "./Components/JavascriptApiProject";
import JavascriptProject from "./Components/JavascriptProject";
import RectProject from "./Components/RectProject";
import UIProject from "./Components/UIProject";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ScrollToTop from "./Components/ScrollToTop";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/project/javascript" element={<JavascriptProject />} />
          <Route path="/project/uiproject" element={<UIProject />} />
          <Route
            path="/project/javascriptapi"
            element={<JavascriptApiProject />}
          />
          <Route path="/project/react" element={<RectProject />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
