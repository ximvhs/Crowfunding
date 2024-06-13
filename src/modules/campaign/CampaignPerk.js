import React from "react";
import { defaultImage } from "../../constants/global";
import CampTitle from "./parts/CampTitle";
import { Button } from "../../components/button";

const CampaignPerk = ({ showButton = false }) => {
	return (
		<div className="">
			<div className="bg-white shadow-1 rounded-xl">
				<img
					src={defaultImage}
					alt=""
					className="h-[232px] object-cover rounded-xl w-full"
				/>
				<div className="p-5">
					<span className="inline-block px-3 py-1 mb-5 text-xs font-medium text-white rounded-sm bg-secondary">
						Featured
					</span>
					<CampTitle className="mb-1 text-xl font-semibold">
						Special One Camera
					</CampTitle>
					<div className="flex items-center mb-4 gap-x-3">
						<span className="text-xl font-bold text-text1">$2,724 USD</span>
						<span className="text-sm line-through text-error">$1,504 USD</span>
						<span className="text-sm text-error">(12% OFF)</span>
					</div>
					<div className="flex flex-col mb-4 gap-y-1">
						<strong>Estimated Shipping</strong>
						<span className="text-text2"> October 2024</span>
					</div>
					<p className="mb-4 text-text2">
						<strong className="text-text1">05</strong> claimed
					</p>
					<p className="text-text2">Ships worldwide</p>
				</div>
			</div>
			{showButton && (
				<div className="mt-6">
					<Button className="w-full text-white bg-secondary">
						Get this perk
					</Button>
				</div>
			)}
		</div>
	);
};

export default CampaignPerk;
