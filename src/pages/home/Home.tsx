import { FC } from "react";

import "./style.scss";

import HeroBanner from "./heroBanner/HeroBanner.js";
import Trending from "./trending/Trending.js";
import Popular from "./popular/Popular.js";
import TopRated from "./topRated/TopRated.js";

const Home: FC = () => {
	return (
		<div className="homePage">
			<HeroBanner />
			<Trending />
			<Popular />
			<TopRated />
		</div>
	);
};

export default Home;
