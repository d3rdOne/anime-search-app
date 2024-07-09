import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../slice/animeSlice";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const ThemeButton = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.animeSearch.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const handleToggle = () => {
    let newTheme = "";
    switch (theme) {
      case "dark":
        newTheme = "light";
        break;
      case "light":
        newTheme = "dark";
        break;
      default:
        newTheme = "light";
    }
    dispatch(setTheme(newTheme));
  };
  return (
    <>
      <button className="toggle-button" onClick={handleToggle}>
        <div className="sun"></div>
        <div className="core"></div>
      </button>
    </>
  );
};

export default ThemeButton;
