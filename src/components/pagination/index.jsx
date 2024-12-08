import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Pagination = ({ fetchData, totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadPage = async (page) => {
    setLoading(true);
    try {
      console.log(page);
      const res = await fetchData(page, 10);
      console.log(res?.results);
      setData(res?.results); // Example: { items: [...] }
      setCurrentPage(res?.page);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPage(currentPage);
  }, [currentPage]);

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisible = 4; // Number of pages to show before dots
    const isTruncated = totalPages > maxVisible + 1;

    for (let i = 1; i <= Math.min(maxVisible, totalPages); i++) {
      pages.push(i);
    }

    // Add dots if there are more pages
    if (isTruncated) {
      if (currentPage >= maxVisible) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div>
      {/* Data List */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}

      {/* Pagination Controls */}
      <div className="col-md-12">
        <ul
          className="panigation mt6"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <li>
            <Link
              to="#"
              onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
              className={`${currentPage === 1 ? "disabled" : ""}`}
              style={{ cursor: currentPage === 1 ? "not-allowed" : "pointer" }}
            >
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 1L1.5 6L6.5 11"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </li>
          {renderPageNumbers().map((page, index) =>
            page === "..." ? (
              <li>
                <span key={index} className="dots">
                  ...
                </span>
              </li>
            ) : (
              <li key={page} onClick={() => loadPage(page)}>
                <Link to="#" className={page === currentPage ? "active" : ""}>
                  {page}
                </Link>
              </li>
            )
          )}
          <li>
            <Link
              to="#"
              onClick={() =>
                currentPage < totalPages && setCurrentPage(currentPage + 1)
              }
              className={`${currentPage === totalPages ? "disabled" : ""}`}
              style={{
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
              }}
            >
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 1L6.5 6L1.5 11"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
