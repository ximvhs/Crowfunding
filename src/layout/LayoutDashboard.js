import React from "react";
import DashboardTopbar from "../modules/dashboard/DashboardTopbar";
import DashboardSidebar from "../modules/dashboard/DashboardSidebar";
import { Outlet } from "react-router-dom";
import Modal from "react-modal";
import Overlay from "../components/common/Overlay";
import { Button } from "../components/button";
import CampCategory from "../modules/campaign/parts/CampCategory";
import CampaignPerk from "../modules/campaign/CampaignPerk";

const LayoutDashboard = ({ children }) => {
	return (
		<div className="min-h-screen p-10 bg-lite">
			<Modal
				isOpen={false}
				overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
				className="modal-content w-full max-w-[521px] bg-white rounded-2xl outline-none p-10 relative max-h-[90vh] overflow-y-auto scroll-hidden"
			>
				<button className="absolute z-10 flex items-center justify-center cursor-pointer w-11 h-11 top-[10px] right-2 text-text1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
				<h2 className="font-bold text-[25px] mb-10 text-center mt-5">
					Back this project
				</h2>
				<p className="mb-3 text-sm">Enter the contribute amount</p>
				<input
					type="text"
					placeholder="$10"
					name="amount"
					className="w-full px-5 py-3 text-lg font-medium border rounded border-strock"
				/>
				<p className="my-5 text-sm text-text3">
					Contribution are not associatied with perks{" "}
				</p>
				<Button className="text-white bg-primary">Continue</Button>
				<div className="mt-[60px]"></div>
				<CampaignPerk showButton></CampaignPerk>
			</Modal>
			<Overlay></Overlay>
			<DashboardTopbar></DashboardTopbar>
			<div className="flex items-start gap-x-10">
				<DashboardSidebar></DashboardSidebar>
				<div className="flex-1">
					<Outlet></Outlet>
				</div>
			</div>
		</div>
	);
};

export default LayoutDashboard;
