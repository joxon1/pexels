import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import axios from "axios";
import { API_KEY, API_URL } from "./api";
import { Routes, Route } from "react-router-dom";
const App = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);

  const srchPhoto = (e) => {
    setValue(e.target.value);
  };

  const getImg = () => {
    const urlAPI = API_URL + value + "&client_id=" + API_KEY;
    axios.get(urlAPI).then((response) => {
      setResult(response.data.results);
    });
  };
  getImg();

  return (
    <>
      <Navbar srchPhoto={srchPhoto} getImg={getImg} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
