"use client";

import { HiMiniSpeakerWave, HiMiniSpeakerXMark } from "react-icons/hi2";

const SimpleVerticalVolume = ({
  volume,
  onVolumeChange,
  isMuted,
  onToggleMute,
}) => {
  return (
    <div className="absolute left-[-60px] top-[50%] transform -translate-y-1/2 bg-black rounded-lg p-3 flex flex-col items-center gap-3 z-10 lg:ml-[-45px]">
      {/* Volume Percentage */}
      <div className="text-white text-xs font-medium">
        {Math.round(volume * 100)}%
      </div>

      {/* Vertical Volume Track */}
      <div className="relative w-1 h-24 bg-gray-600 rounded-full">
        {/* Volume Fill */}
        <div
          className="absolute bottom-0 left-0 w-full bg-white rounded-full transition-all duration-200"
          style={{ height: `${volume * 100}%` }}
        />

        {/* Volume Thumb */}
        <div
          className="absolute w-3 h-3 bg-white rounded-full -left-1 transition-all duration-200"
          style={{ bottom: `calc(${volume * 100}% - 6px)` }}
        />

        {/* Invisible Input for Interaction */}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={onVolumeChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          style={{
            writingMode: "bt-lr",
            WebkitAppearance: "slider-vertical",
          }}
        />
      </div>

      {/* Speaker Icon */}
      <button
        onClick={onToggleMute}
        className="text-white text-lg hover:text-gray-300 transition-colors"
      >
        {isMuted || volume === 0 ? (
          <HiMiniSpeakerXMark />
        ) : (
          <HiMiniSpeakerWave />
        )}
      </button>
    </div>
  );
};

export default SimpleVerticalVolume;
