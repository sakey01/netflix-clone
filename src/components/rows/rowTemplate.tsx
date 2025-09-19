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

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(endpoint);
        const data = await res.json();
        if (res.ok) setMovies(data.results);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMovies();
  }, [endpoint]);

  const scroll = (offset: number) => {
    scrollRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="relative max-w-screen pl-6 group text-white">
      <h2 className="text-xl font-bold">{category}</h2>

      {/* Scroll buttons */}
      <button
        onClick={() => scroll(-500)}
        className="absolute z-10 left-0 top-1/2 -translate-y-1/2 p-2 duration-500 opacity-0 group-hover:opacity-100 bg-black/50 hover:bg-black/70 rounded-full"
      >
        <VscChevronLeft size={36} />
      </button>

      <button
        onClick={() => scroll(500)}
        className="absolute z-10 right-0 top-1/2 -translate-y-1/2 p-2 duration-500 opacity-0 group-hover:opacity-100 bg-black/50 hover:bg-black/70 rounded-full"
      >
        <VscChevronRight size={36} />
      </button>

      {/* Movie row */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll overflow-y-hidden no-scrollbar py-4 max-w-screen"
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="group/card relative cursor-pointer flex-shrink-0 p-1 w-32 sm:w-48 md:56 lg:72 delay-50 duration-300 hover:scale-115 hover:z-1"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.name || movie.title}
              className="rounded-t"
            />
            <div className="hidden absolute bottom-0 group-hover/card:flex flex-col p-2 bg-gradient-to-b from-transparent to-neutral-950 w-[96%]">
              {/* Controls */}
              <div className="w-full flex justify-between">
                <div className="flex gap-2">
                  <button onClick={() => {alert("Maybe another time")}} className="p-1 bg-white text-black rounded-full hover:bg-neutral-300">
                    <BsFillPlayFill />
                  </button>
                  <button className="control-btn ">
                    <FiPlus />
                  </button>
                  <button className="control-btn hidden sm:block">
                    <FiThumbsUp />
                  </button>
                  <button className="control-btn hidden sm:block">
                    <FiThumbsDown />
                  </button>
                </div>
                <button className="control-btn">
                  <FiChevronDown />
                </button>
              </div>
              {/* card info */}
              <p className="text-[12px] sm:text-base font-semibold">{movie.name || movie.title}</p>
              <span className="text-green-500 text-[10px] sm:text-sm">
                {Math.floor(movie.vote_average * 10)}% Match
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RowTemplate;
