import React from "react";
import IconDashboard from "../../components/icon/IconDashboard";
import { NavLink } from "react-router-dom";
import IconCampaign from "../../components/icon/IconCampaign";
import IconPayment from "../../components/icon/IconPayment";
import IconWithdraw from "../../components/icon/IconWithdraw";
import IconProfile from "../../components/icon/IconProfile";
import IconLogout from "../../components/icon/IconLogout";
import IconDarkmode from "../../components/icon/IconDarkmode";

const sidebarLinks = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Dashboard",
    url: "/",
  },
  {
    icon: <IconCampaign></IconCampaign>,
    title: "Campaign",
    url: "/campaign",
  },
  {
    icon: <IconPayment></IconPayment>,
    title: "Payment",
    url: "/payment",
  },
  {
    icon: <IconWithdraw></IconWithdraw>,
    title: "Withdraw",
    url: "/withdraw",
  },
  {
    icon: <IconProfile></IconProfile>,
    title: "Profile",
    url: "/profile",
  },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "/logout",
  },
  {
    icon: <IconDarkmode></IconDarkmode>,
    title: "Light/Dark",
    url: "/#",
    onClick: () => {},
  },
];

const DashboardSidebar = () => {
  return (
    <div className="w-full flex-skrink-0 md:w-[76px] rounded-3xl bg-white shadow-sdprimary px-[14px] py-10 flex flex-col">
      {sidebarLinks.map((link) => (
        <NavLink
          to={link.url}
          key={link.title}
          className="flex items-center last:bg-white last:shadow-sdprimary last:mt-auto gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-3xl md:mb-8"
        >
          <span>{link.icon}</span>
          <span className="md:hidden">{link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;
