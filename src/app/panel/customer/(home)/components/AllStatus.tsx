import BatteryStatus from "@/components/cards/BatteryStatus";
import DashboardCard from "@/components/cards/dashboardCard";
import React from "react";

const AllStatus = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <DashboardCard title="وضعیت دستگاه">
        <ul>
          <li>
            <BatteryStatus level={70} />
          </li>
        </ul>
      </DashboardCard>
      <DashboardCard title="وضعیت خودرو"></DashboardCard>
      <DashboardCard title="آمار"></DashboardCard>
    </div>
  );
};

export default AllStatus;
