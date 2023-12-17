import { FC } from "react";
import { useParams } from "react-router-dom";
import "./style.scss";

import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner.js";
import Cast from "./cast/Cast.js";
import VideosSection from "./videosSection/VideosSection.js";
import Similar from "./carousels/Similar.js";
import Recommendation from "./carousels/Recommendation.js";

const Details: FC = () => {
	const { mediaType, id } = useParams();
	// @ts-ignore
	const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
	const { data: credits, loading: creditsLoading } = useFetch(
		// @ts-ignore
		`/${mediaType}/${id}/credits`
	);

	return (
		<div>
			<DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
			<Cast data={credits?.cast} loading={creditsLoading} />
			<VideosSection data={data} loading={loading} />
			<Similar mediaType={mediaType} id={id} />
			<Recommendation mediaType={mediaType} id={id} />
		</div>
	);
};

export default Details;
