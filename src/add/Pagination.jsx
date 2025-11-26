import React from "react";

const Pagination = ({
  totalPosts,
  postPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex text-white gap-3 items-center">
      {pages.map((page, index) => {
        return (
          <button
            onClick={() => setCurrentPage(page)}
            className={`py-1.5 px-2 cursor-pointer  text-md rounded border ${
              page == currentPage ? "text-gray-700 bg-blue-300" : ""
            }`}
            key={index}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
