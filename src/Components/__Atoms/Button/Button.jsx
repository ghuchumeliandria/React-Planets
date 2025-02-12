import React from "react";

function Button(props) {
  return (
    <>
      <button className=" border-[1px] border-[#ffffff2b] cursor-pointer px-7 py-3 bg-transparent flex gap-7 focus:bg-[#419EBB] items-center hover:bg-[#419EBB] ">
        <p className="text-[#ffffff36]">{props.num}</p>
        <p className="text-white">{props.text}</p>
      </button>
    </>
  );
}

export default Button;
