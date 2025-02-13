import React from "react";

function ExternalBox(props){
    return(
        <>
        <div className="max-w-[255px] w-full h-[128px] px-[23px] pt-[20px] pb-[27px] border-[1px] border-[#ffffff35] text-white">
            <p className="uppercase text-[11px] opacity-[0.5]">{props.paragraph}</p>
            <h1 className="text-[40px] tracking-[-1.5px]">{props.heading}</h1>
        </div>
        </>
    )
}

export default ExternalBox;