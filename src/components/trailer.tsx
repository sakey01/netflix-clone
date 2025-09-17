import { useState } from "react";
import { BsVolumeUp, BsVolumeMute, BsFillPlayFill } from "react-icons/bs";
import { BiInfoCircle } from "react-icons/bi";

const Trailer = () => {
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const video_url = "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  return (
    <div>
      <video
        src={video_url}
        autoPlay
        muted
        playsInline
        controls={false}
        className="w-full h-screen object-cover"
      />


      <article className="flex flex-col text-white absolute gap-4 top-50 px-10 translate-x-0 translate-y-0">
        <h1 className="text-6xl font-bold">The Lion King</h1>
        <p>
          Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny. But not
          everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother and
          former heir to the throne has plans of his own. The battle for Pride Rock is ravaged with
          betrayal, tragedy and drama, ultimately resulting in Simba's exile.
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => alert("Can't play Movie")}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-black rounded"
          >
            <BsFillPlayFill size={20} />
            Play
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 rounded">
            <BiInfoCircle size={20} />
            More Info
          </button>
        </div>
      </article>

      {isMuted ? (
        <button className="absolute bottom-0 right-0">
          <BsVolumeMute onClick={() => setIsMuted(false)} />
        </button>
      ) : (
        <button className="absolute bottom-0 right-0">
          <BsVolumeUp onClick={() => setIsMuted(true)} />
        </button>
      )}
    </div>
  );
};

export default Trailer;
