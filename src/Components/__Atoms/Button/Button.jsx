import React from "react";

function Button(props) {

  const ChangeContent = () =>{
    props.setPlanetImg(props.planetImg)
    props.setPlanetOverview(props.planetOverview)
  }

  return (
    <>
      <button className={` border-[1px] border-[#ffffff2b] cursor-pointer px-7 py-3 bg-transparent flex gap-7 focus:bg-[${props.color}] items-center hover:bg-[${props.color}] ` } onClick={ChangeContent}>
        <p className="text-[#ffffff36]">{props.num}</p>
        <p className="text-white">{props.text}</p>
      </button>
    </>
  );
}

export default Button;
