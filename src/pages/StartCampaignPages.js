import React from "react";
import LayoutDashboard from "../layout/LayoutDashboard";
import CampaignAddNew from "../modules/campaign/CampaignAddNew";

const StartCampaignPages = () => {
  return (
    <LayoutDashboard>
      <CampaignAddNew></CampaignAddNew>
    </LayoutDashboard>
  );
};

export default StartCampaignPages;
