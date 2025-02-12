import React from "react";
import Button from "../../__Atoms/Button/Button";
import { Link } from "react-router";
function Content(props) {
  return (
    <>
      <div className="flex  gap-[85px] px-[165px] py-[65px] mt-[61px] justify-between  ">
          <div className="w-full flex justify-center items-center">
            <img src={props.planet} alt="" className="w-300px h-200px" />
          
        </div>
        <div className="flex flex-col gap-[39px]  max-w-[350px]">
            <div className="flex flex-col gap-[23px] text-left">
          <h1 className="text-[80px] text-white">{props.newData.name}</h1>
          <p className="text-white">{props.newData.overview.content}</p>
          <p className="text-white opacity-[0.5]  text-[14px]">
            Source : <Link to={props.newData.overview.source} className="font-bold" >Wikipedia</Link>
          </p>
          </div>
          <div className="flex flex-col gap-[16px]">
            <Button num={"01"} text={"OVERVIEW"} />
            <Button num={"02"} text={"Internal Structure"} />
            <Button num={"03"} text={"Surface Geology"} />
            
          </div>
        </div>
      </div>
    </>
  );
}
export default Content;
