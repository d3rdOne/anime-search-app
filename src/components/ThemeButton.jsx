import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../slice/animeSlice";
import { useEffect } from "react";

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

  const handleTheme = (dark) => {
    dispatch(setTheme(dark ? "dark" : "light"));
  };
  return (
    <>
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-black dark:border-gray-200 rounded-s-lg "
          onClick={() => handleTheme(false)}
        >
          Light
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-black dark:border-gray-200 rounded-e-lg"
          onClick={() => handleTheme(true)}
        >
          Dark
        </button>
      </div>
    </>
  );
};

export default ThemeButton;
