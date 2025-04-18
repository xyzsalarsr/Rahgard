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
          } transition-all relative p-6 ease-in-out duration-200 rounded-r-[3rem] mr-auto bg-[var(--foregraund)] h-screen overflow-x-hidden overflow-y-auto `}
        >
          <svg
            className=" absolute top-4 -right-48"
            width="501"
            height="834"
            viewBox="0 0 501 834"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="250.5"
              cy="417"
              rx="232.5"
              ry="427"
              transform="rotate(-15 250.5 417)"
              fill="url(#paint0_linear_171_5052)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_171_5052"
                x1="250.5"
                y1="-10"
                x2="250.5"
                y2="844"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2D2D2D" />
                <stop offset="1" stopColor="#1E1E1E" />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative z-20">{children}</div>

          <svg
            className=" absolute top-8 left-0"
            width="100"
            height="985"
            viewBox="0 0 100 985"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="-132.5"
              cy="545.5"
              rx="232.5"
              ry="545.5"
              fill="url(#paint0_linear_171_5053)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_171_5053"
                x1="-132.5"
                y1="0"
                x2="-132.5"
                y2="1091"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2D2D2D" />
                <stop offset="1" stopColor="#1E1E1E" />
              </linearGradient>
            </defs>
          </svg>
        </main>
      </div>
    </>
  );
}
