import { useEffect, useRef, useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { FiChevronDown, FiPlus } from "react-icons/fi";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

type RowItem = {
  category: string;
  endpoint: string;
};

const RowTemplate: React.FC<RowItem> = ({ category, endpoint }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);

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

  const handleScroll = () => {
    if (!scrollRef.current) return;
    setScrolled(scrollRef.current.scrollLeft > 5);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scroll = (scrollBy: number) => {
    scrollRef.current?.scrollBy({ left: scrollBy, behavior: "smooth" });
  };

  return (
    <section className="relative max-w-screen max-h-100 pl-6 group text-white">
      <h2 className="text-md sm:text-xl font-bold">{category}</h2>

      {/* Scroll buttons */}
      {scrolled && (
        <button
          onClick={() => scroll(-510)}
          className="absolute z-10 left-0 top-1/2 -translate-y-1/2 p-1 sm:p-2 duration-500 opacity-0 group-hover:opacity-100 bg-black/50 hover:bg-black/70 rounded-full"
        >
          <VscChevronLeft size={36} />
        </button>
      )}

      <button
        onClick={() => scroll(510)}
        className="absolute z-10 right-0 top-1/2 -translate-y-1/2 p-1 sm:p-2 duration-500 opacity-0 group-hover:opacity-100 bg-black/50 hover:bg-black/70 rounded-full"
      >
        <VscChevronRight size={36} />
      </button>

      {/* Movie row */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll overflow-y-hidden no-scrollbar py-2 sm:py-4 max-w-screen"
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="group/card relative cursor-pointer flex-shrink-0 p-1 w-32 sm:w-48 md:w-56 delay-10 duration-400 hover:scale-115 hover:z-1"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.name || movie.title}
              className="rounded-t"
            />
            <div className="hidden absolute bottom-0 group-hover/card:flex flex-col px-2 py-3 bg-gradient-to-b from-transparent to-neutral-950 w-[96%]">
              {/* Controls */}
              <div className="w-full flex justify-between">
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      alert("Not yet :)");
                    }}
                    className="p-1 sm:p-2 bg-white text-black rounded-full hover:bg-neutral-300"
                  >
                    <BsFillPlayFill />
                  </button>
                  <button className="control-btn">
                    <FiPlus />
                  </button>
                  {/* <button className="control-btn hidden lg:block">
                    <FiThumbsUp />
                  </button>
                  <button className="control-btn hidden lg:block">
                    <FiThumbsDown />
                  </button> */}
                </div>
                <button className="control-btn">
                  <FiChevronDown />
                </button>
              </div>
              {/* card info */}
              <p className="text-[12px] sm:text-base font-semibold">{movie.name || movie.title}</p>
              <span className="text-green-500 font-semibold text-[10px] sm:text-sm">
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
