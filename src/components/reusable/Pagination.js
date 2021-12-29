import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Pagination = () => {
  useEffect(() => {
    return () => {
      // cleanup
    };
  }, []);

  return (
    <>
      <div class="utf-pagination-container-aera margin-top-30 margin-bottom-60">
        <nav class="pagination">
          <ul>
            <li class="utf-pagination-arrow">
              <Link to="/">
                <i class="icon-material-outline-keyboard-arrow-left"></i>
              </Link>
            </li>
            <li>
              <Link to="/" class="current-page">
                1
              </Link>
            </li>
            <li>
              <Link to="/">2</Link>
            </li>
            <li>
              <Link to="/">3</Link>
            </li>
            <li>
              <Link to="/">4</Link>
            </li>
            <li class="utf-pagination-arrow">
              <Link to="/">
                <i class="icon-material-outline-keyboard-arrow-right"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Pagination;
