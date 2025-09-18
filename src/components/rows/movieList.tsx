import { Endpoints } from "../../endpoints";
import Fantasy from "./fantasy";
import NetflixOriginals from "./netflixOriginals";
import Action from "./action";
import TopRated from "./topRated";
import Anime from "./anime";
import Comedy from "./comedy";

const MovieList = () => {
  return (
    <div className="grid gap-8">
      <NetflixOriginals endpoint={Endpoints.NetflixOriginal} />
      <TopRated endpoint={Endpoints.TopRated} />
      <Fantasy endpoint={Endpoints.Fantasy} />
      <Comedy endpoint={Endpoints.Comedy} />
      <Action endpoint={Endpoints.Action} />
      <Anime endpoint={Endpoints.Anime} />
    </div>
  );
};

export default MovieList;
