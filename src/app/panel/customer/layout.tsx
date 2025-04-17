"use client";
import { useState } from "react";
import SideBar from "../components/SideBar";
import "./assets/css/style.css";

export default function CustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sideBarStatus, setSideBarStatus] = useState<boolean>(true);
  return (
    <>
      <div className="flex flex-wrap">
        <SideBar
          sideBarStatus={sideBarStatus}
          setSideBarStatus={setSideBarStatus}
          navItem={[
            {
              title: "داشبورد",
              link: "/panel/customer",
              icon: "/assets/img/customer/1.svg",
            },
            {
              title: "نقشه",
              link: "#",
              icon: "/assets/img/customer/2.svg",
            },
            {
              title: "تاریخچه نقشه",
              link: "#",
              icon: "/assets/img/customer/3.svg",
            },
            {
              title: "تنظیمات دستگاه",
              link: "#",
              icon: "/assets/img/customer/4.svg",
            },
            {
              title: "کنترل افلاین",
              link: "#",
              icon: "/assets/img/customer/5.svg",
            },
            {
              title: "اشتراک دستگاه",
              link: "#",
              icon: "/assets/img/customer/6.svg",
            },
            {
              title: "پشتیبانی",
              link: "#",
              icon: "/assets/img/customer/7.svg",
            },
          ]}
        />

        <main
          className={`${
            sideBarStatus ? "w-[calc(100%_-_250px)]" : "w-[calc(100%_-_100px)]"
          } transition-all p-6 ease-in-out duration-200 rounded-r-[3rem] mr-auto bg-[var(--foregraund)] h-screen overflow-x-hidden overflow-y-auto `}
        >
          {children}
        </main>
      </div>
    </>
  );
}
