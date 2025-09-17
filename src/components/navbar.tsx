import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [bg, setBg] = useState<boolean>(false);

  // Track scroll position
  const handleBg = () => {
    if (window.scrollY >= 40) setBg(true);
    else {
      setBg(false);
    }
  };

  window.addEventListener("scroll", handleBg);

  return (
    <nav
      className={`flex fixed items-center justify-between min-w-screen p-4 px-12 text-white z-50 transition-all 0.3s ${
        bg ? "bg-black" : "bg-none"
      }`}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        alt="Netlfix Logo"
        width={90}
      />

      <aside className="flex items-center gap-6">
        <BiSearch size={20} />
        <button className="text-sm font-light">Kids</button>
        <BsBell size={20} />

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="profile avatar"
            width={30}
            height={30}
          />

          <MdKeyboardArrowDown size={20} className={``} />
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
