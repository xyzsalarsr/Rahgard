import BatteryStatus from "@/components/cards/BatteryStatus";
import DashboardCard from "@/components/cards/DashboardCard";
import DeviceStatus from "@/components/cards/DeviceStatus";
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
      <DashboardCard title="آمار">
        <ul className="grid grid-cols-4 gap-1">
          <li>
            <DeviceStatus
              icon={"/assets/img/status/1.svg"}
              time="00:16:56"
              description="اخرین اپدیت چند ثانیه پیش"
            />
          </li>
          <li>
            <DeviceStatus
              icon={"/assets/img/status/2.svg"}
              time="08:15:06"
              description="مدت روشن بودن خودرو امروز"
            />
          </li>
          <li>
            <DeviceStatus
              icon={"/assets/img/status/3.svg"}
              time="26Km"
              description="مسافت طی شده امروز"
            />
          </li>
          <li>
            <DeviceStatus
              icon={"/assets/img/status/4.svg"}
              time="21 Day"
              description="روز باقیمانده اشتراک سرویس"
            />
          </li>
        </ul>
      </DashboardCard>
    </div>
  );
};

export default AllStatus;
