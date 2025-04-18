import React from "react";
import Wave from "react-wavify";

type BatteryStatusProps = {
  level: number | string;
};

const BatteryStatus: React.FC<BatteryStatusProps> = ({ level }) => {
  return (
    <div className="w-[60px]">
      <div className="h-[4px] w-[25px] bg-zinc-200 rounded-t-2xl mx-auto mb-[2px]" />
      <div className="relative w-[50px] h-[70px] border-2 border-zinc-200 mx-auto rounded-[9px] overflow-hidden">
        <Wave
          fill="#03e091"
          paused={false}
          className="absolute left-0 right-0 bottom-[0] transition-all duration-700 ease-in-out"
          style={{ height: level }}
          options={{
            height: 20,
            amplitude: 5,
            speed: 0.25,
            points: 2,
          }}
        />
        <span className=" absolute inset-0 z-20 flex justify-center items-center text-sm">
          %<span className="text-lg font-bold">{level}</span>
        </span>
      </div>
      <span className="text-sm mt-2 block text-center">{level} درصد</span>
    </div>
  );
};

export default BatteryStatus;
