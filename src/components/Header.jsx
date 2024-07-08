import { Link } from "react-router-dom";
import ThemeButton from "./ThemeButton";

const Header = () => {
  return (
    <header
      id="header"
      className="h-20 w-full z-20 flex justify-between items-center sm:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl mb-2"
    >
      {/* <div className="w-full sm:max-w-screen-xl m-auto text-2xl tracking-widest">Anime Searcher</div> */}
      <Link to="/">
        {" "}
        <h1 className="text-3xl font-semibold tracking-widest">ANIMESEARCH</h1>
      </Link>

      <ThemeButton></ThemeButton>
    </header>
  );
};

export default Header;
