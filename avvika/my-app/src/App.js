import { BrowserRouter, Routes, Route } from "react-router-dom";

import GoogleRes from "./Components/GoogleRes";
import Login from "./Components/Login";
import Home from './Components/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Otpvarify from './Components/Otpvarify'
import FilterPage from './Components/FilterPage'

import "./App.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="registration" element={<GoogleRes />} />
      <Route exact path="login" element={<Login />} />
      <Route exact path="/otp-varify" element={<Otpvarify />} />
      <Route exact path="/header" element={<Header />} />
      <Route exact path="/footer" element={<Footer />} />
      <Route exact path="/" element={<Home />} />
      <Route path="/filter-page/:value" element={<FilterPage/>} />
    </Routes>
  </BrowserRouter>
);
export default App;
