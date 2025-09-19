import { useEffect, useRef, useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { FiChevronDown, FiPlus, FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

type RowItem = {
  category: string;
  endpoint: string;
};

const RowTemplate: React.FC<RowItem> = ({ category, endpoint }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [movies, setMovies] = useState<
    {
      name: string;
      title?: string;
      id: number;
      poster_path: string;
      vote_average: number;
    }[]
  >([]);

  // Fetch data
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(endpoint);
        const data = await res.json();

        if (!res.ok) return;
        console.log(data.results);

        setMovies(data.results);
      } catch (e) {
        console.error(e);
      }
    };

    fetchMovie();
  }, [endpoint]);

  const scrollLeft = () => {
    const slider = scrollRef.current;
    if (slider !== null) {
      slider.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const slider = scrollRef.current;
    if (slider !== null) {
      slider.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group max-w-screen text-white mt-10 px-4">
      {/* Scroll left button */}
      <button onClick={scrollLeft} className="chevron-btn left-1">
        <VscChevronLeft size={36} />
      </button>

      {/* Movie Row */}
      <div className="flex flex-col">
        <h2 className="text-xl font-bold scale-y-110">{category}</h2>

        {/* Row container */}
        <div
          className="flex overflow-x-scroll"
          ref={scrollRef}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {movies.length > 0 &&
            movies.map((movie) => (
              <div className="cursor-pointer flex-shrink-0 relative py-4 rounded transition-transform duration-250 delay-25 ease-in-out w-[240px] hover:scale-110">
                <img
                  key={movie.id}
                  src={`//image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.name}
                  width={240}
                  className="rounded"
                />
                {/* Control + info section */}
                <div className="flex flex-col w-full gap-4 bg-neutral-900 rounded p-2">
                  {/* Controls sections */}
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <button className="control-btn text-black bg-white">
                        <BsFillPlayFill />
                      </button>
                      <button className="control-btn">
                        <FiPlus />
                      </button>
                      <button className="control-btn">
                        <FiThumbsUp />
                      </button>
                      <button className="control-btn">
                        <FiThumbsDown />
                      </button>
                    </div>
                    <div>
                      <button className="control-btn">
                        <FiChevronDown />
                      </button>
                    </div>
                  </div>

                  <p className="text-lg font-bold break-words whitespace-normal">
                    {movie.name || movie.title}
                  </p>
                  <div className="text-green-500">{Math.floor(movie.vote_average * 10)}% Match</div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Scroll right button */}
      <button onClick={scrollRight} className="chevron-btn right-1">
        <VscChevronRight size={36} />
      </button>
    </div>
  );
};

export default RowTemplate;
