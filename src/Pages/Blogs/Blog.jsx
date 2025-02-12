import React from "react";
import { useParams } from "react-router";
import data from "../../data.json";
import bgImg from "../../assets/images/Background-stars.png";
import Content  from "../../Components/__Molecules/Content/Content";
import Header from "../../Components/__Molecules/Header/Header";

function Planets() {
  const { name } = useParams();
  const newData = data.find((params) => params.name === name);
  


  return (
    <>
      <div
        className="bg-cover min-h-[100vh] bg-[#070724;]"
        style={{ backgroundImage: `url(${bgImg})` }}>
        <Header />
        <Content planet={`/src${newData.images.internal}`} newData={newData} />
      </div>
    </>
  );
}

export default Planets;
