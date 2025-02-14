import React from "react";
import ExternalBox from "../../__Atoms/ExternalBox/ExternalBox";
function PlanetExternal(props) {
  return (
    <>
      <div className="w-full flex gap-[30px] items-center justify-center max-[1342px]:gap-[11px] max-[740px]:flex-col max-[740px]:gap-[8px]">
        <ExternalBox heading={props.newData.rotation} paragraph={"Rotation Time"} />
        <ExternalBox heading={props.newData.revolution} paragraph={"REVOLUTION TIME"} />
        <ExternalBox heading={props.newData.radius} paragraph={"radius"} />
        <ExternalBox heading={props.newData.temperature} paragraph={"AVERAGE TEMP."} />
      </div>
    </>
  );
}

export default PlanetExternal;
