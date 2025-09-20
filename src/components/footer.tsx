import { TbBrandGithub } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="flex min-w-screen justify-center items-center pt-30 pb-10 gap-2 text-sm text-stone-300">
      <a href="https://github.com/sakey01/netflix-clone" target="_blank">
        <TbBrandGithub size={18} />
      </a>
      <span>
        Built By{" "}
        <a target="_blank" href="https://github.com/sakey01" className="font-semibold">
          Sakey
        </a>
      </span>
    </footer>
  );
};

export default Footer;
