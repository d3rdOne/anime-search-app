import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../slice/animeSlice";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const ThemeButton = ({ className }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.animeSearch.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const handleToggle = (checked) => {
    dispatch(setTheme(checked ? "dark" : "light"));
  };
  return (
    <>
      <label className={`${className} inline-flex items-center cursor-pointer`}>
        <input
          type="checkbox"
          value={theme === "dark"}
          className="sr-only peer"
          onChange={(e) => handleToggle(e.target.checked)}
        />
        <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-0 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
      </label>
    </>
  );
};

export default ThemeButton;
