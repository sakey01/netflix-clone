import { useEffect, useRef, useState } from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

type RowItem = {
  category: string;
  endpoint: string;
};

const RowTemplate: React.FC<RowItem> = ({ category, endpoint }) => {
  const scrollRef = useRef(null);

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
    if (!scrollRef.current) return;
  };

  const scrollRight = () => {
    if (!scrollRef.current) return;
  };
  // Watch scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      scrollLeft();
      scrollRight();
    });
  }, []);

  return (
    <div className="flex items-center text-white mt-10">
      {/* Scroll left button */}
      <button onClick={scrollLeft} className="chevron-btn">
        <VscChevronLeft size={32} />
      </button>

      {/* Movie Row */}
      <div className="flex scr flex-col">
        <h2 className="text-lg font-semibold scale-y-110">{category || "Loading"}</h2>
        <div className="flex overflow-x-auto hideScroll py-4 gap-2" ref={scrollRef}>
          {movies.length > 0 &&
            movies.map((movie) => (
              <img
                key={movie.id}
                src={`//image.tmdb.org/t/p/w500/${movie.poster_path}`}
                width={160}
                className="cursor-pointer transition-transform duration-250 delay-25 rounded hover:scale-110"
              />
            ))}
        </div>
      </div>

      {/* Scroll right button */}
      <button onClick={scrollRight} className="chevron-btn">
        <VscChevronRight size={32} />
      </button>
    </div>
  );
};

export default RowTemplate;
