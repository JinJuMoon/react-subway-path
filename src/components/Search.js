import React from "react";
import SearchInput from './SearchInput';
import SearchResult from './SearchResult';

import "../assets/service/css/search.css";

const Search = props => (
  <>
    <div className="max-w-sm w-full lg:width-350px rounded bg-white shadow-lg px-6 pt-6 pb-2">
      <div className="font-bold text-xl mb-4 text-center">지하철 경로 검색</div>
      <SearchInput />
    </div>
    <SearchResult />
  </>
);

export default Search;
