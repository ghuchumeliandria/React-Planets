import React from "react";

function Button(props) {

  const ChangeContent = () =>{
    props.setPlanetImg(props.planetImg)
    props.setPlanetOverview(props.planetOverview)
  }

  return (
    <>
    <div className="w-full max-[740px]:max-w-[220px]  ">
      <button className={` w-full border-[1px] border-[#ffffff2b] cursor-pointer px-7 py-3 bg-transparent flex gap-7 focus:bg-[${props.color}] items-center hover:bg-[${props.color}] max-md:text-[9px]  max-[740px]:border-0 max-[740px]:max-w-[220px] max-[740px]:px-0  max-[740px]:focus:border-b-[5px] max-[740px]:focus:border-[#FF6A45] ` } onClick={ChangeContent}>
        <p className="text-[#ffffff36] font-display max-[740px]:hidden">{props.num}</p>
        <p className="text-white  max-[740px]:m-auto">{props.text}</p>
      </button>
      </div>
    </>
  );
}

export default Button;
