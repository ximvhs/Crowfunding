import React, { Fragment } from "react";
import CampImage from "./parts/CampImage";
import CampCategory from "./parts/CampCategory";
import CampTitle from "./parts/CampTitle";
import CampDesc from "./parts/CampDesc";
import CampMeta from "./parts/CampMeta";
import Button from "../../components/button/Button";
import CampViewAuthor from "./parts/CampViewAuthor";
import { defaultImage } from "../../constants/global";

const CampView = () => {
	return (
		<Fragment>
			<div
				className="h-[140px] rounded-3xl bg-cover mb-10 bg-no-repeat bg-center flex justify-center items-center text-white text-[40px] font-bold"
				style={{
					backgroundImage: `linear-gradient(179.14deg, rgba(32, 18,63,0)-7.14%, #000000 87.01%), url(https://images.unsplash.com/photo-1717704067715-57d14b090290?q=80&w=1943&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
				}}
			>
				<h1>Education</h1>
			</div>
			<div className="flex items-start gap-x-10 w-full max-w-[1066px]">
				<div className="flex-1">
					<CampImage className="h-[398px] mb-8"></CampImage>
					<div className="flex justify-center gap-x-5">
						{Array(4)
							.fill(0)
							.map((item, index) => (
								<img
									src={defaultImage}
									className="w-[89px] h-[70px] rounded-lg object-cover "
									alt=""
								/>
							))}
					</div>
				</div>
				<div className="flex-1 max-w-[443px]">
					<CampCategory text="Architecture" className="text-sm"></CampCategory>
					<CampTitle className="mb-4 text-xl font-bold">
						Remake - We Make architecture exhibition
					</CampTitle>
					<CampDesc className="mb-6 text-sm">
						Remake - We Make: an exhibition about architecture's social agency
						in the face of urbanisation
					</CampDesc>
					<CampViewAuthor></CampViewAuthor>
					<div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6">
						<div className="w-2/4 h-full rounded-full bg-primary"></div>
					</div>
					<div className="flex items-start justify-between mb-4 gap-x-5">
						<CampMeta size="big"></CampMeta>
						<CampMeta size="big"></CampMeta>
						<CampMeta size="big"></CampMeta>
					</div>
					<Button className="w-full text-white bg-primary">
						Back this project
					</Button>
				</div>
			</div>
		</Fragment>
	);
};

export default CampView;
