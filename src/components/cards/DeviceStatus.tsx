import Image from "next/image";
import React from "react";

type DeviceStatusProps = {
  icon?: string;
  time?: string;
  description?: string;
};

const DeviceStatus: React.FC<DeviceStatusProps> = ({
  icon = "",
  time = "",
  description = "",
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Image
        src={icon}
        alt="Device Status Icon"
        width={60}
        height={60}
        className="w-10 h-10"
      />
      <span className="text-sm block -mb-2">{time}</span>
      <p className="text-xs text-zinc-400 text-center">{description}</p>
    </div>
  );
};

export default DeviceStatus;
