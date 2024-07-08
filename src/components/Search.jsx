/* eslint-disable react/prop-types */

const Search = ({ title, onSearch, className }) => {
  return (
    <div className="w-full flex justify-center">
      <input
        type="text"
        value={title}
        tabIndex={2}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Type anime title"
        className={
          className +
          ` px-8 py-4 border-gray-600 border-2 border-t-0 border-l-0 border-r-0 w-full outline-0 outline-gray-400 shadow-lg sm:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl text-gray-900 font-semibold text-xl`
        }
      />
    </div>
  );
};

export default Search;
