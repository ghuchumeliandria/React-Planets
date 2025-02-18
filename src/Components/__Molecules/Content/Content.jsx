import Button from "../../__Atoms/Button/Button";
import { Link } from "react-router";
import img from "../../../assets/WikiIcon.png";
function Content(props) {

  console.log(props.newData.color)

  return (
    <>
      <div className="flex  gap-[85px]  justify-between max-md:flex-col  max-md:gap[95px]  ">
        <div className="w-full flex justify-center items-center">
          <img src={props.planet} alt="" className="w-300px h-200px" />
        </div>
        <div className="flex flex-col gap-[39px]  max-w-[350px] max-md:flex-row max-md:max-w-[688px] max-md:justify-between max-md:items-center  ">
          <div className="flex flex-col gap-[23px] text-left max-md:max-w-[333px] max-[740px]:m-auto max-[740px]:text-center   ">
            <h1 className="text-[80px] text-white max-md:text-[48px]">
              {props.newData.name}
            </h1>
            <p className="text-white max-md:text-[11px] max-md:leading-[20px]  ">
              {props.planetOverview}
            </p>
            <p className="text-white opacity-[0.5]  text-[14px] flex gap-2.5 max-[740px]:justify-center max-[740px]:mt-[10px]">
              Source :{" "}
              <Link
                to={props.newData.overview.source}
                className="font-bold flex gap-2.5 items-center ">
                Wikipedia <img src={img} alt="" className="w-3 h-3" />
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-[16px] max-md:max-w-[740px] max-md:w-full max-[740px]:absolute max-[740px]:flex-row max-[740px]:top-[75px]  max-[740px]:left-0 max-[740px]:gap-[0] max-[740px]:px-[24px] max-[740px]:border-b-[1px] border-[#ffffff2f] ">
            <Button
              num={"01"}
              text={"OVERVIEW"}
              color={props.newData.color}
              setPlanetImg={props.setPlanetImg}
              planetImg={`/src${props.newData.images.planet}`}
              setPlanetOverview={props.setPlanetOverview}
              planetOverview={props.newData.overview.content}
            />
            <Button
              num={"02"}
              text={"Internal Structure"}
              color={props.newData.color}
              setPlanetImg={props.setPlanetImg}
              planetImg={`/src${props.newData.images.internal}`}
              setPlanetOverview={props.setPlanetOverview}
              planetOverview={props.newData.structure.content}
            />
            <Button
              num={"03"}
              text={"Surface Geology"}
              color={props.newData.color}
              setPlanetImg={props.setPlanetImg}
              planetImg={`/src${props.newData.images.geology}`}
              setPlanetOverview={props.setPlanetOverview}
              planetOverview={props.newData.geology.content}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Content;
