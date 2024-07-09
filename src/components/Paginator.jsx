/* eslint-disable react/prop-types */
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";

const Paginator = ({ containerClassName, onSelectPage }) => {
  const pageCount = useSelector((state) => state.animeSearch.pageCount);
  const currentPage = useSelector((state) => state.animeSearch.currentPage);

  return (
    <>
      <div className="w-full sm:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        {pageCount > 0 && (
          <ReactPaginate
            pageCount={pageCount}
            forcePage={currentPage - 1}
            pageRangeDisplayed={4}
            onPageChange={(event) => onSelectPage(event.selected)}
            nextLabel="NEXT"
            previousLabel="PREV"
            containerClassName={`${containerClassName} w-full gap-0 sm:gap-2 flex flew-wrap justify-center text-xs sm:text-sm tracking-wider`}
            previousClassName=" rounded-sm border-[1px] py-1 px-2 border-black/50 bg-gray-50  hover:bg-gray-100 dark:bg-red-700 dark:border-gray-red dark:hover:bg-red-600"
            nextClassName="rounded-sm border-[1px] py-1 px-2 border-black/50 bg-gray-50 hover:bg-gray-100 dark:bg-red-700 dark:border-gray-red dark:hover:bg-red-600"
            pageClassName="rounded-sm border-[1px] py-1 px-2 border-black/50 bg-gray-50  hover:bg-gray-100 dark:bg-red-700 dark:border-gray-red dark:hover:bg-red-600"
            breakClassName="rounded-sm border-[1px] py-1 px-2 border-black/50 bg-gray-50  hover:bg-gray-100 dark:bg-red-700 dark:border-gray-red dark:hover:bg-red-600"
            activeClassName="rounded-sm border-[1px] bg-red-600 hover:bg-red-600 text-white border-gray-100 dark:bg-red-800 dark:hover:bg-red-800"
            disabledClassName="rounded-sm bg-gray-50 cursor-default text-gray-400 dark:bg-red-800 dark:hover:bg-red-800 disabled"
            // className="cursor-default"
          ></ReactPaginate>
        )}
      </div>
    </>
  );
};

export default Paginator;
