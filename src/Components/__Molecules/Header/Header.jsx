import React from "react";
import data from '../../../data.json'
import { Link } from "react-router";

function Header(){
    return(
        <>
        <div className="w-full px-[32px] py-[22px] border-b-[1px] border-[#ffffff1c] flex justify-between">
            <h1 className="text-white text-[28px]">The planets</h1>
            <div className="flex gap-[33px] items-center">
                {data.map((planet , rotation) =>{
                   return <Link to={`/blog/${planet.name}`} key={rotation}>
                        <p className="text-white">{planet.name}</p>
                    </Link>
                })}
            </div>
        </div>
        </>
    )
}

export default Header;