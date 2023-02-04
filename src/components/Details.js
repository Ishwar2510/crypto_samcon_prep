import React, { useContext } from "react";
import { useParams } from "react-router";
import { userContext } from "../App";

function Details() {
  const mycontext = useContext(userContext);
  console.log(mycontext);
  const { id } = useParams();
  console.log(id);
  const data = mycontext.centraldata.filter((e) => e.id === id)[0];
  console.log(data);
  return (
    <>
      <div>
        <li>ID :{data.id}</li>
        <li>Name :{data.name}</li>
        <li>Rs {data.price.toFixed(2)}</li>
        <li>{data.symbol}</li>
        <li>volume : {data.volume}</li>
      </div>
    </>
  );
}

export default Details;
