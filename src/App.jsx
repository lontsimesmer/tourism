import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import { Route, Routes, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}
