import React from "react";
import Player from "../components/Player";
import { useSelector } from "react-redux";
import Card from "../components/Card";

function Playlist() {
  let songs = useSelector((state) => state.playlist);
  return (
    
    <div className="w-full h-screen bg-black flex justify-start items-center flex-col pt-[20px] md:pt-[100px] gap-[30px] ">
      <Player />
      {
        !songs.length<1?
        <>  
          <h1 className="text-white text-[20px] font-semibold ">Playlist</h1>
          <div className="w-[100%] h-[65%] md:h-[100%] flex flex-col justify-start items-center gap-5 overflow-auto ">
            {songs.map((song) => (
              <Card
                key={song.songIndex}
                name={song.name}
                image={song.image}
                singer={song.singer}
                songIndex={song.songIndex}
              />
        ))}
      </div>
      </>
      
        :
      <div className='text-gray-700 text-[30px] font-semibold '>No Songs In Playlist</div>
        
      }
    
    </div>
  );
}

export default Playlist;
