import { useEffect, useRef, useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { FiPlus, FiThumbsDown, FiThumbsUp } from "react-icons/fi";
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
    <div className="relative group text-white mt-10 px-4">
      {/* Scroll left button */}
      <button onClick={scrollLeft} className="chevron-btn left-1">
        <VscChevronLeft size={36} />
      </button>

      {/* Movie Row */}
      <div className="flex flex-col px-6 md:px-10">
        <h2 className="text-lg font-semibold scale-y-110">{category}</h2>
        {/* Row container */}
        <div
          className="flex overflow-x-scroll py-4 gap-2"
          ref={scrollRef}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {movies.length > 0 &&
            movies.map((movie) => (
              <div className="flex-shrink-0 relative cursor-pointer">
                <img
                  key={movie.id}
                  src={`//image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.name}
                  width={240}
                  className="cursor-pointer transition-transform duration-250 delay-25 rounded hover:scale-110"
                />
                <div className="flex justify-between px-4 py-2 hidden">
                  <button className="">
                    <BsFillPlayFill />
                  </button>
                  <button className="">
                    <FiPlus />
                  </button>
                  <button className="">
                    <FiThumbsUp />
                  </button>
                  <button className="">
                    <FiThumbsDown />
                  </button>
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
