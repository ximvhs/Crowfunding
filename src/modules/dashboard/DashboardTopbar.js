import React from "react";
import DashboardSearch from "./DashboardSearch";
import Button from "../../components/button/Button";
import DashboardFund from "./DashboardFund";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center flex-1 gap-x-10">
        <img srcSet="/logo.png 2x" alt="" />
        <div className=" max-w-[458px] w-full">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10">
        <DashboardFund></DashboardFund>
        <Button className="bg-secondary px-7" type="button">
          Start a campaign
        </Button>
        <img
          srcSet="/logo.png 2x"
          alt=""
          className="object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default DashboardTopbar;
