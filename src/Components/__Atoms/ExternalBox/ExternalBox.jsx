import React from "react";

function ExternalBox(props) {
  return (
    <>
      <div className="max-w-[255px] w-full h-[128px] px-[23px] pt-[20px] pb-[27px] border-[1px] border-[#ffffff35] text-white max-[1036px]:p-[16px] max-[1036px]:h-[88px] max-[740px]:flex max-[740px]:justify-between max-[740px]:max-w-[527px] max-[740px]:items-center max-[440px]:h-[48px] ">
        <p className="uppercase text-[11px] opacity-[0.5] max-[1036px]:text-[12px] max-[440px]:text-[8px]">
          {props.paragraph}
        </p>
        <h1 className="text-[40px] tracking-[-1.5px] max-[1036px]:text-[24px] max-[450px]:text-[20px]">
          {props.heading}
        </h1>
      </div>
    </>
  );
}

export default ExternalBox;
