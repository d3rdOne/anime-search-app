import { Link } from "react-router-dom";
import ThemeButton from "./ThemeButton";

const Header = () => {
  return (
    <header
      id="header"
      className="h-20 w-full z-20 flex justify-between items-center sm:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mb-2"
    >
      <Link to="/">
        {" "}
        <h1 className="text-3xl font-semibold tracking-widest">ANIMESEARCH</h1>
      </Link>
      <ThemeButton className="ml-8"></ThemeButton>
    </header>
  );
};

export default Header;
