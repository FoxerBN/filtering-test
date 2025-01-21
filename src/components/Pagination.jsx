import React from "react";

const Pagination = ({ page, totalPages, onPageChange }) => (
  <div className="flex items-center justify-between mt-8">
    <button
      onClick={() => onPageChange(Math.max(page - 1, 1))}
      className="btn btn-primary"
      disabled={page === 1}
    >
      Previous
    </button>
    <span className="text-gray-700">
      Page <span className="font-bold">{page}</span> of{" "}
      <span className="font-bold">{totalPages}</span>
    </span>
    <button
      onClick={() => onPageChange(Math.min(page + 1, totalPages))}
      className="btn btn-primary"
      disabled={page === totalPages}
    >
      Next
    </button>
  </div>
);

export default Pagination;
