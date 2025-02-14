import React from "react";
import data from "../../../data.json";
import { Link } from "react-router";
import { useState } from "react";
import Burger from '../../../assets/images/burger.png'
function Header() {
  const [hidden, setHidden] = useState(false);
  console.log(data);
  function Show() {
    setHidden(!hidden);
  }
  return (
    <>
      <div className="w-full px-[32px] py-[22px] border-b-[1px] border-[#ffffff1c] flex justify-between max-[850px]:px-6 max-[850px]:py-4">
        <Link to={"/"} className="text-white text-[28px]">
          The planets
        </Link>

        <div className="flex gap-[33px] items-center max-[855px]:hidden">
          {data.map((planet, rotation) => {
            return (
              <Link to={`/blog/${planet.name}`} key={rotation}>
                <p className="text-white">{planet.name}</p>
              </Link>
            );
          })}
        </div>

        <div className="text-white flex  items-center min-[855px]:hidden  ">
          <button onClick={Show} className="cursor-pointer ">
            <img src={Burger} alt="" />
          </button>
        </div>
        {hidden && (
          <div
            className={`flex gap-[33px] items-center max-[855px]:absolute  max-[855px]:flex-col max-[855px]:w-full max-[855px]:left-[0] max-[855px]:top-[68px] max-[855px]:px-6 max-[855px]:py-[44px] max-[855px]:z-[322px] max-[855px]:bg-[#070724]`}>
            {data.map((planet, rotation) => {
              return (
                <Link
                  to={`/blog/${planet.name}`}
                  key={rotation}
                  className="w-full flex gap-[25px] justify-start uppercase">
                  <img
                    src={`/src${planet.images.planet}`}
                    alt=""
                    className="w-5 h-5"
                  />
                  <p className="text-white">{planet.name}</p>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
