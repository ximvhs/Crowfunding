import React from "react";
import LayoutDashboard from "../layout/LayoutDashboard";
import Heding from "../components/common/Heding";
import CampaignGrid from "../modules/campaign/CampaignGrid";
import CampaignItem from "../modules/campaign/CampaignItem";
import { v4 } from "uuid";
import Gap from "../components/common/Gap";
import CampaignFeature from "../modules/campaign/CampaignFeature";

const DashboardPage = () => {
  return (
    <LayoutDashboard>
      <Heding number={4}>Your campaign</Heding>
      <CampaignFeature></CampaignFeature>
      <Gap></Gap>
      <Heding>Popular campaign</Heding>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaignGrid>
      <Gap></Gap>

      <Heding>Recent campaign</Heding>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaignGrid>
    </LayoutDashboard>
  );
};

export default DashboardPage;
