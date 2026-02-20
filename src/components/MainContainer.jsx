import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"
import MainContainerShimmer from "../shimmer/MainContainerShimmer";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    if (!movies) return <MainContainerShimmer />;

    const mainMovie = movies[0];

    const {original_title, overview, id} = mainMovie;

    return (
        <div className="relative w-full h-screen">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground  movieId={id}/>
        </div>
    )
}

export default MainContainer