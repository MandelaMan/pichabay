import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

function PhotographerNotFound() {
  return (
    <>
      <div id="titlebar" class="gradient">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>
                No results for: "<i>Nelson</i>"
              </h2>
              <nav id="breadcrumbs">
                <ul>
                  <li>
                    <Link to="">Home</Link>
                  </li>
                  <li>Search for A Photographer</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="inner_search_block_section padding-top-0 padding-bottom-40">
        <div class="container">
          <SearchBox />
        </div>
      </div>
    </>
  );
}

export default PhotographerNotFound;
