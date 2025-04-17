import CarInfoCard from "./components/CarInfoCard";

export default function CustomerHome() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-7">
        <CarInfoCard />
      </div>
    </div>
  );
}
