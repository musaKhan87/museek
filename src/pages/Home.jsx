import React, { useContext, useEffect, useRef, useState } from "react";
import { songsData } from "../songs";
import musicImg from "../assets/musicanim.webp";
import { CgPlayTrackPrev, CgPlayTrackNext } from "react-icons/cg";
import { IoPlay } from "react-icons/io5";
import { datacontext } from "../context/UserContext";
import { MdOutlinePause, MdKeyboardArrowDown } from "react-icons/md";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { HiMiniSpeakerXMark } from "react-icons/hi2";
import Card from "../components/Card";
import Player from "../components/Player";
import "./song.css"

function Home() {
  const [range, setRange] = useState(0);
  const [arrow, setArrow] = useState(false);

  let {
    audioRef,
    playsong,
    pausesong,
    playingsong,
    nextsong,
    index,
    prevsong,
  } = useContext(datacontext);
  let progress = useRef(null);

  useEffect(() => {
    const updateProgress = () => {
      let duration = audioRef.current.duration || 0;
      let currentTime = audioRef.current.currentTime || 0;
      let progressPercentage = (currentTime / duration) * 100 || 0;
      setRange(progressPercentage);

      if (progress.current) {
        progress.current.style.width = `${progressPercentage}%`;
      }
    };

    audioRef.current.addEventListener("timeupdate", updateProgress);
  }, []);

  function handleRange(e) {
    let newrange = e.target.value;
    setRange(newrange);
    let duration = audioRef.current.duration;
    audioRef.current.currentTime = (duration * newrange) / 100;
  }

  // Add to top of component
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  const handleVolumeChange = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    setIsMuted(vol === 0);
    if (audioRef.current) audioRef.current.volume = vol;
  };

  const toggleMute = () => {
    const newVolume = isMuted ? 1 : 0;
    setVolume(newVolume);
    setIsMuted(!isMuted);
    if (audioRef.current) audioRef.current.volume = newVolume;
  };

  return (
    <div className="w-full h-screen bg-black flex relative overflow-hidden">
      <MdKeyboardArrowDown
        className={`z-30 absolute text-white top-[23px] left-2 text-3xl md:hidden cursor-pointer  ${
          arrow ? "rotate-270" : "rotate-0"
        } `}
        onClick={() => setArrow((prev) => !prev)}
      />

      {!arrow ? (
        <>
          <div className="w-full md:w-[50%] h-full flex  flex-col justify-start items-center pt-[20px] md:pt-[120px] gap-[30px] relative overflow-scroll scrollbar-hide  ">
            <h1 className="text-white font-semibold text-[20px]">
              Now Playing
            </h1>
            <div className="w-[80%] max-w-[250px] h-[250px] object-fill  relative ">
              <img
                src={songsData[index].image}
                alt={songsData[0].name}
                className="w-[100%] h-[100%] rounded-md  "
              />

              {playingsong ? (
                <div className="w-full h-full bg-black absolute top-0 opacity-[0.5] flex justify-center items-center ">
                  <img src={musicImg} alt="" className="w-[50%]" />
                </div>
              ) : null}
              <div className="absolute md:left-[-45%] left-[-40%]  md:top-[20%] top-[30%] flex items-center flex-col gap-3">
                <div className="h-[100px] md:h-[120px] flex items-center justify-center relative ">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    className="volume-slider"
                    onChange={handleVolumeChange}
                  />
                </div>
                <div
                  className="text-white text-2xl cursor-pointer hover:text-gray-400 transition-all"
                  onClick={toggleMute}
                >
                  {isMuted || volume === 0 ? (
                    <HiMiniSpeakerXMark />
                  ) : (
                    <HiMiniSpeakerWave />
                  )}
                </div>
              </div>
            </div>
            <div>
              <div className="text-white text-[30px] font-bold text-center ">
                {songsData[index].name}
              </div>
              <div className="text-gray-400 text-[18px] text-center ">
                {songsData[index].singer}
              </div>
            </div>
            <div className="w-[50%] flex justify-center items-center  relative  ">
              <input
                type="range"
                className="appearance-none w-[100%] h-[7px] rounded-md bg-gray-600"
                id="range"
                value={range}
                onChange={handleRange}
              />
              <div
                className="bg-white h-[100%] absolute left-0 rounded-md "
                ref={progress}
              ></div>
            </div>
            <div className="text-white flex justify-center items-center gap-5 ">
              <CgPlayTrackPrev
                className="w-[28px] h-[28px] hover:text-gray-600 transition-all cursor-pointer "
                onClick={() => prevsong()}
              />
              {!playingsong ? (
                <div
                  className="w-[50px] h-[50px] rounded-full bg-white text-black flex justify-center items-center hover:bg-gray-600 transition-all cursor-pointer "
                  onClick={() => playsong()}
                >
                  <IoPlay className="w-[20px] h-[20px]" />
                </div>
              ) : (
                <div
                  className="w-[50px] h-[50px] rounded-full bg-white text-black flex justify-center items-center hover:bg-gray-600 transition-all cursor-pointer "
                  onClick={() => pausesong()}
                >
                  <MdOutlinePause className="w-[20px] h-[20px]" />
                </div>
              )}
              <CgPlayTrackNext
                className="w-[28px] h-[28px] hover:text-gray-600 transition-all cursor-pointer "
                onClick={() => nextsong()}
              />
            </div>
          </div>
          <div className="w-[100%] md:w-[50%] hidden h-full  md:flex pt-[150px] pb-[20px] overflow-auto flex-col gap-5 scrollbar-hide ">
            {songsData.map((song) => (
              <Card
                key={song.id}
                name={song.name}
                image={song.image}
                singer={song.singer}
                songIndex={song.id - 1}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="w-[100%] md:w-[50%]  h-[70%] flex mt-[70px] items-center pb-[70px] overflow-auto flex-col gap-5 scrollbar-hide relative ">
          <Player/>
          {songsData.map((song) => (
            <Card
              key={song.id}
              name={song.name}
              image={song.image}
              singer={song.singer}
              songIndex={song.id - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
