import BatteryStatus from "@/components/cards/BatteryStatus";
import DashboardCard from "@/components/cards/dashboardCard";
import NetworkStatus from "@/components/cards/NetworkStatus";
import React from "react";

const AllStatus = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <DashboardCard title="وضعیت دستگاه">
        <ul className="flex gap-20 items-end">
          <li>
            <BatteryStatus level={70} />
          </li>
          <li>
            <NetworkStatus level={3} speed={"168kb"} />
          </li>
        </ul>
      </DashboardCard>
      <DashboardCard title="وضعیت خودرو"></DashboardCard>
      <DashboardCard title="آمار"></DashboardCard>
    </div>
  );
};

export default AllStatus;
