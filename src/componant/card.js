import React from "react";
import { useState } from "react";

const Card = ({ el }) => {
  console.log(el.rate);
  const [rating, setRating] = useState(el.rate);

  const handlClick = (e) => {
    setRating(e.target.value);
  };

  return (
    <div className="each">
      <img src={el.url} className="image" />
      <div>
        <span style={{ marginTop: "50px" }}> {el.n} </span>
        <span className="moviename" style={{ marginTop: "50px" }}>
          {el.name}
        </span>
        <div>
          <span className="rate"> rate : {rating}</span>
          <input type="text" onChange={handlClick} className="rateinput" />
        </div>
      </div>
    </div>
  );
};

export default Card;
