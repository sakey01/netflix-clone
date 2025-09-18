import { useState } from "react";
import { BsVolumeUp, BsVolumeMute, BsFillPlayFill } from "react-icons/bs";
import { BiInfoCircle } from "react-icons/bi";

const Trailer: React.FC = () => {
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const overview =
    "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.";

  return (
    <div className="h-screen bg-gradient-to-b from-black to-neutral-950">
      <div className="relative w-full" style={{ paddingTop: "56.%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/ndl1W4ltcmg?rel=0&modestbranding=1&autoplay=1&controls=1"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      {/* Hero section */}
      <article className="flex flex-col text-white absolute gap-4 top-50 px-6 sm:px-10 translate-x-0 translate-y-0">
        <h1 className="text-6xl font-bold sm:text-7xl">The Witcher</h1>
        <p className="text-stone-400 sm:text-lg md:max-w-3/4 max-w-full md:text-xl">{overview}</p>

        {/* Button group */}
        <div className="flex gap-4">
          <button className="btn bg-white text-black hover:bg-stone-200">
            <BsFillPlayFill size={20} />
            Play
          </button>
          <button className="btn bg-neutral-600 hover:bg-stone-500">
            <BiInfoCircle size={20} />
            More Info
          </button>
        </div>
      </article>

      {/* Volume icon */}
      {isMuted ? (
        <button className="sound-btn" onClick={() => setIsMuted(false)}>
          <BsVolumeMute />
        </button>
      ) : (
        <button className="sound-btn" onClick={() => setIsMuted(true)}>
          <BsVolumeUp />
        </button>
      )}
    </div>
  );
};

export default Trailer;
