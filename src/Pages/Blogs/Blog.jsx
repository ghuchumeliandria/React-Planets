import React from "react";
import { useParams } from "react-router";
import data from "../../data.json";
import bgImg from "../../assets/images/Background-stars.png";
import img from "../../assets/planet-uranus.svg"
import Header from "../../Components/__Molecules/Header/Header";

function Planets() {
  const { name } = useParams();
  const newData = data.find((params) => params.name === name);
  console.log(newData);
  return (
    <>
      <div
        className="bg-cover min-h-[100vh] bg-[#070724;]"
        style={{ backgroundImage: `url(${bgImg})` }}>
        <Header />
        <div className="flex flex-col gap-[85px] px-[165px] py-[65px] mt-[61px]  ">
          <div className="flex gap-8 items-center">
            <div className="w-full">
            
            <img src={`/src${newData.images.internal}`} alt="" className="w-300px h-200px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Planets;
