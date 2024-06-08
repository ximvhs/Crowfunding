import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LayoutDashboard from "./layout/LayoutDashboard";
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const CampaignPgae = lazy(() => import("./pages/CampaignPgae"));
const StartCampaignPages = lazy(() => import("./pages/StartCampaignPages"));
const CampView = lazy(() => import("./modules/campaign/CampaignView"));

function App() {
	return (
		<Suspense>
			<Routes>
				<Route element={<LayoutDashboard></LayoutDashboard>}>
					<Route path="/" element={<DashboardPage></DashboardPage>}></Route>
					<Route
						path="/campaign"
						element={<CampaignPgae></CampaignPgae>}
					></Route>
					<Route
						path="/start-campaign"
						element={<StartCampaignPages></StartCampaignPages>}
					></Route>
					<Route path="/campaign/:slug" element={<CampView></CampView>}></Route>
				</Route>
				<Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
				<Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
			</Routes>
		</Suspense>
	);
}

export default App;
