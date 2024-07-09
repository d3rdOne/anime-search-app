/* eslint-disable react/prop-types */
const Path = (props) => (
  <path
    fill="transparent"
    strokeWidth="2"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const Search = ({ title, onSearch, onClear, className }) => {
  return (
    <div className="w-full flex justify-center relative">
      <input
        type="text"
        value={title}
        tabIndex={2}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Type anime title"
        className={
          className +
          ` px-8 py-4 border-gray-600 border-2 border-t-0 border-l-0 border-r-0 w-full outline-0 outline-gray-400 shadow-lg sm:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl text-gray-900 font-default text-xl`
        }
      />
      <div className="absolute sm:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl w-full">
        <button
          className={`absolute right-4 text h-8 w-8 top-4 stroke-gray-500 ${
            title === "" ? "hidden" : "block"
          }`}
          onClick={onClear}
        >
          <svg width="23" height="23" viewBox="0 0 23 23">
            <Path d="M 3 16.5 L 17 2.5"></Path>
            <Path d="M 3 2.5 L 17 16.346"></Path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Search;
