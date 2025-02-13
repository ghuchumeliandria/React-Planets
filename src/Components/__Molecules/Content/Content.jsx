import Button from "../../__Atoms/Button/Button";
import { Link } from "react-router";
import img from '../../../assets/WikiIcon.png'
function Content(props) {
  return (
    <>
      <div className="flex  gap-[85px]  justify-between  ">
        <div className="w-full flex justify-center items-center">
          <img src={props.planet} alt="" className="w-300px h-200px" />
        </div>
        <div className="flex flex-col gap-[39px]  max-w-[350px]">
          <div className="flex flex-col gap-[23px] text-left">
            <h1 className="text-[80px] text-white">{props.newData.name}</h1>
            <p className="text-white">{props.planetOverview}</p>
            <p className="text-white opacity-[0.5]  text-[14px] flex gap-2.5">
              Source :{" "}
              <Link to={props.newData.overview.source} className="font-bold flex gap-2.5 items-center">
                Wikipedia <img src={img} alt="" className="w-3 h-3" />
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-[16px]">
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
