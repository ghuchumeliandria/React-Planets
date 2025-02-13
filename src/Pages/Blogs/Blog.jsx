import { useParams } from "react-router";
import { useState , useEffect } from "react";
import data from "../../data.json";
import bgImg from "../../assets/images/Background-stars.png";
import Content from "../../Components/__Molecules/Content/Content";
import Header from "../../Components/__Molecules/Header/Header";
import PlanetExternal from "../../Components/__Molecules/PlanetExternal/PlanetExternal";


function Planets() {
  const { name } = useParams();
  const newData = data.find((params) => params.name === name);
  const [planetImg, setPlanetImg] = useState(`/src${newData.images.planet}`);
  const [planetOverview,setPlanetOverview] = useState(newData.overview.content)
  console.log(data)
  useEffect(() => {
    setPlanetImg(`/src${newData.images.planet}`);
    setPlanetOverview(newData.overview.content)
  }, [name, newData]);

  return (
    <>
      <div
        className="bg-cover min-h-[100vh] bg-[#070724;] scroll-smooth"
        style={{ backgroundImage: `url(${bgImg})` }}>
        <Header />
        <div className="flex flex-col px-[165px] py-[65px] mt-[61px] gap-[85px] max-w-[1440px] m-auto">
        <Content planet={planetImg} newData={newData} setPlanetImg={setPlanetImg} setPlanetOverview={setPlanetOverview} planetOverview={planetOverview} />
        <PlanetExternal newData={newData} />
        </div>
      </div>
    </>
  );
}

export default Planets;
