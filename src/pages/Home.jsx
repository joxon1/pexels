import React from "react";
import "./Home.scss";
const Home = ({ result = [] }) => {
  return (
    <div className="home_container">
      {result.map((img) => (
        <div className="list" key={img.id}>
          <a className="list_link">
            <img src={img.urls.full} alt={img.user.name} />
            <p>
              <b>Photographer: </b>
              {img.user.name}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Home;
