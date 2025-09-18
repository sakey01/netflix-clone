import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [avatarSelected, setAvatartSelected] = useState<boolean>(false);

  useEffect(() => {
    // Track scroll position
    const handleScroll = () => {
      setScrolled(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex fixed items-center justify-between min-w-screen p-4 px-6 sm:px-12 text-white z-50 ${
        scrolled ? "bg-neutral-950" : "bg-transparent"
      }`}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        alt="Netlfix Logo"
        width={90}
      />

      {/* Nav right side */}
      <aside className="flex items-center gap-6">
        <button>
          <BiSearch size={20} />
        </button>

        <button className="text-sm font-light hidden sm:block">Kids</button>
        <button>
          <BsBell size={20} />
        </button>

        {/* Profile */}
        <div
          onClick={() => {
            setAvatartSelected((prev) => !prev);
          }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="profile avatar"
            width={30}
            height={30}
          />

          <MdKeyboardArrowDown
            size={20}
            className={`transition-transform duration-200 ${avatarSelected ? "rotate-180" : ""}`}
          />
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
