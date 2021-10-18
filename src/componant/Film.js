import React from "react";
import { useParams } from "react-router-dom";
import Card from "./card";

const Film = (props) => {
  let id = useParams();
  let filmi = props.film.find((el) => el.id == id.id);
  console.log(filmi.name);

  return (
    <div>
      <Card el={filmi} />
      <p>
        description about this film :
        kcndcnnxqcn;x;bcxcbxncbxncbx,cbxnbcnxbcnxbcnxbcxncbxn,bcnxbc,bcnbxcnxbc,nbxc,nxbcnbcnxbcncb
      </p>
    </div>
  );
};

export default Film;
