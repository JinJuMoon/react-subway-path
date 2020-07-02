import React, { useReducer } from "react";
import SearchInput from './SearchInput';
import SearchResult from './SearchResult';

import "../assets/service/css/search.css";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

const Search = props => {
  const [state, dispatch] = useReducer(reducer, {
    departureStation: '',
    arrivalStation: ''
  });

  const { departureStation, arrivalStation } = state;

  const handleChange = e => {
    dispatch(e.target);
  }

  const searchPath = () => {
    // axios로 api 데이터 받아오기
  }

  return (
    <>
      <div className="max-w-sm w-full lg:width-350px rounded bg-white shadow-lg px-6 pt-6 pb-2">
        <div className="font-bold text-xl mb-4 text-center">지하철 경로 검색</div>
        <SearchInput
          departureStation={departureStation}
          arrivalStation={arrivalStation}
          handleChange={handleChange}
          searchPath={searchPath}
        />
      </div>
      <SearchResult/>
    </>
  );
};

export default Search;
