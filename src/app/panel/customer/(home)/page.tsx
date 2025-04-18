"use client";

import AllStatus from "./components/AllStatus";
import CarInfoCard from "./components/CarInfoCard";
import Map from "./components/Map";
import TripChart from "./components/TripChart";

export default function CustomerHome() {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-7">
        <CarInfoCard />
      </div>
      <div className="col-span-5">
        <Map />
      </div>
      <div className="col-span-12">
        <AllStatus />
      </div>
      <div className="col-span-12">
        <TripChart />
      </div>
    </div>
  );
}
