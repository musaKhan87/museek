import React, { useContext } from "react";
import { MdPlaylistAdd, MdOutlinePlaylistRemove } from "react-icons/md";
import { GoHeart,GoHeartFill } from "react-icons/go";
import { datacontext } from "../context/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { AddSong, RemoveSong } from "../redux/PlaylistSlice";
import { AddLike, RemoveLike } from "../redux/LikedSlice";
function Card({ image, name, singer, songIndex }) {
  const { playsong, setIndex } = useContext(datacontext);
  const dispatch = useDispatch();
  const gaana = useSelector((state) => state.playlist);
  const inPlaylist = gaana.some((song) => song.songIndex === songIndex);

  const likedSong = useSelector((state) => state.liked);
  const inLike = likedSong.some((song) => song.songIndex === songIndex);
  return (
    <div className="w-[90%] h-[70px] md:h-[120px] bg-gray-800 rounded-lg p-[5px] md:p-[10px] flex justify-center items-center hover:bg-gray-600 transition-all ">
      <div
        className="flex justify-start items-center gap-[20px] w-[80%] h-[100%] cursor-pointer  "
        onClick={() => {
          setIndex(songIndex);
          playsong();
        }}
      >
        <div>
          <img
            src={image}
            alt=""
            className="w-[60px] max-h-[60px] md:max-h-[100px] md:w-[100px] rounded-lg  "
          />
        </div>
        <div className="text-[15px] md:text-[20px] ">
          <div className="text-white lg:text-[1.2em] text-[1em] font-semibold ">
            {name}
          </div>
          <div className="text-gray-400 text-[0.7em] font-semibold  ">
            {singer}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-[20px] w-[20%] h-[100%] text-[15px] md:text-[20px] ">
        {!inPlaylist && (
          <div>
            <MdPlaylistAdd
              className="text-white lg:text-[1.5rem] text-[1.3rem] cursor-pointer "
              onClick={() =>
                dispatch(AddSong({ name, image, singer, songIndex }))
              }
            />
          </div>
        )}
        {inPlaylist && (
          <div>
            <MdOutlinePlaylistRemove
              className="text-white lg:text-[1.5rem] text-[1.3rem] cursor-pointer "
              onClick={() => dispatch(RemoveSong({ songIndex }))}
            />
          </div>
        )}
        {
          !inLike && (<div>
          <GoHeart className="text-white lg:text-[1.3rem] text-[1rem] cursor-pointer " 
          onClick={() =>
            dispatch(AddLike({ name, image, singer, songIndex }))
          }
          />
        </div>)
        }
          {
          inLike && (<div>
          <GoHeartFill className="text-white lg:text-[1.3rem] text-[1rem] cursor-pointer " 
          onClick={() =>
            dispatch(RemoveLike({songIndex }))
          }
          />
        </div>)
        }
      </div>
    </div>
  );
}

export default Card;
