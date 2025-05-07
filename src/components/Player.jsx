import React, { useContext } from "react";
import { songsData } from "../songs";
import { MdOutlinePause } from "react-icons/md";
import { IoPlay } from "react-icons/io5";
import { datacontext } from "../context/UserContext";


function Player() {
    let {playingsong,playsong,pausesong,index}=useContext(datacontext)
  return (
    <div className="w-[100%] md:w-[60%] h-[100px] fixed bg-white bottom-[55px] md:bottom-0 rounded-t-[30px] shadow-lg flex pt-[10px]">
      <div className="flex justify-start items-start gap-[20px] w-[80%] h-[100%] cursor-pointer pl-[30px] ">
        <div>
          <img
            src={songsData[index].image}
            alt=""
            className="w-[60px] max-h-[60px] md:max-h-[80px] md:w-[80px] rounded-lg object-fill  "
          />
        </div>
        <div className="text-[20px] md:text-[25px] ">
          <div className="text-black text-[1.1em]  font-semibold ">
            {songsData[index].name}
          </div>
          <div className="text-gray-800 text-[0.6em] font-semibold  ">
            {songsData[index].singer}
          </div>
        </div>
      </div>
     <div className="w-[20%] h-[100%] mt-[5px] md:mt-0 md:flex justify-center items-center ">
     {!playingsong ? (
        <div
          className="w-[50px] h-[50px] rounded-full bg-black text-white flex justify-center items-center hover:bg-gray-600 transition-all cursor-pointer"
          onClick={() => playsong()}
        >
          <IoPlay className="w-[20px] h-[20px]" />
        </div>
      ) : (
        <div
          className="w-[50px] h-[50px] rounded-full bg-black text-white flex justify-center items-center hover:bg-gray-600 transition-all cursor-pointer"
          onClick={() => pausesong()}
        >
          <MdOutlinePause className="w-[20px] h-[20px]" />
        </div>
      )}
     </div>
    </div>
  );
}

export default Player;
