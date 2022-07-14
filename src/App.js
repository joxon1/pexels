import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [photo, setPhoto] = useState([]);
  const API_KEY = "563492ad6f91700001000001c2e888caef804335992fbce4dee8cefd";
  const API = `https://api.pexels.com/v1/curated`;
  useEffect(() => {
    async function defaultPhotos() {
      const data = await fetch(API, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: API_KEY,
        },
      });
      const response = await data.json();
      console.log(response);
    }
    defaultPhotos();
  }, []);
  return (
    <>
      <Navbar />
      
    </>
  );
};

export default App;
