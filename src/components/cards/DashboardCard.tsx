import React, { ReactNode } from "react";

type DashboardCardProps = {
  title: string;
  children?: ReactNode;
};

const DashboardCard: React.FC<DashboardCardProps> = ({
  title = "",
  children = "",
}) => {
  return (
    <div className="bg-[#181818] p-4 px-5 rounded-2xl">
      <span className="mb-4 block">{title}</span>
      {children}
    </div>
  );
};

export default DashboardCard;
