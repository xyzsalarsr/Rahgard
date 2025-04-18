import Image from "next/image";
import React from "react";

const Map = () => {
  return (
    <div>
      <Image
        src={"/assets/img/map/1.png"}
        alt="map"
        width={500}
        height={500}
        className="rounded-[35px] w-[300px] border border-black block mr-auto"
      />
    </div>
  );
};

export default Map;
