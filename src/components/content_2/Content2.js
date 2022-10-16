import React from "react";
import "./style/_style.scss";

export function Content2() {
  return (
    <div className="container">
      <div className="cont_wrap">
        <div className="cont2_head">LATEST</div>
        <div className="cont2_body">
          <div className="tile">
            <img src={require("./img1.webp")} alt="img1" />
            <p className="date">Jul 18 . 2 min</p>
            <p className="text">THE UNBRANDED BRAND</p>
          </div>
          <div className="tile">
            <img src={require("./img2.webp")} alt="img2" />
            <p className="date">Jul 18 . 2 min</p>
            <p className="text">SEEKING INSPIRATION? 15 RESOURCES THAT...</p>
          </div>
          <div className="tile">
            <img src={require("./img3.webp")} alt="img3" />
            <p className="date">Jul 18 . 2 min</p>
            <p className="text">73 QUESTION WITH DONNA FAY</p>
          </div>
          <div className="tile">
            <img src={require("./img4.webp")} alt="img4" />
            <p className="date">Jul 18 . 2 min</p>
            <p className="text">HOW TO BRAND A DISEASE?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
