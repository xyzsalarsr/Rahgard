import React from "react";

type NetworkStatusProps = {
  level: 1 | 2 | 3 | 4;
  speed: string;
};

const barHeights = [45, 35, 25, 15];

const NetworkStatus: React.FC<NetworkStatusProps> = ({ level, speed }) => {
  return (
    <div>
      <div className="flex items-end gap-2">
        {barHeights.map((height, index) => {
          const shouldBeGreen = level >= 4 - index;
          return (
            <div
              key={index}
              className={`w-[6px] rounded-4xl ${
                shouldBeGreen ? "bg-[#03e091]" : "bg-zinc-200"
              }`}
              style={{ height: `${height}px` }}
            />
          );
        })}
      </div>
      <span className="text-sm mt-4 text-white/80 block text-center">
        {speed}
      </span>
    </div>
  );
};

export default NetworkStatus;
