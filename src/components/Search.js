import React, { useReducer, useState } from "react";
import axios from 'axios';
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
  const [path, setPath] = useState(null);
  const [state, dispatch] = useReducer(reducer, {
    departureStation: '',
    arrivalStation: ''
  });

  const { departureStation, arrivalStation } = state;

  const changeStationsInput = e => {
    dispatch(e.target);
  }

  const getPath = type => {
    axios.get(`/paths?source=${departureStation}&target=${arrivalStation}&type=${type}`)
    .then(response => response.data)
    .then(data => {
      console.log(data);
      setPath(data);
    })
    .catch(e => console.log(e));
  }

  const searchShortestDistance = () => {
    getPath("DISTANCE");
  }

  const searchMinimumTime = () => {
    getPath("DURATION")
  }

  return (
    <div className="flex justify-center items-center flex-col app-container md:py-10 lg:py-10 relative">
      <div className="max-w-sm w-full lg:width-350px rounded bg-white shadow-lg px-6 pt-6 pb-2">
        <div className="font-bold text-xl mb-4 text-center">지하철 경로 검색</div>
        <SearchInput
          departureStation={departureStation}
          arrivalStation={arrivalStation}
          changeStationsInput={changeStationsInput}
          searchShortestDistance={searchShortestDistance}
        />
      </div>
      {path !== null
        ? <SearchResult path={path}
                        searchShortestDistance={searchShortestDistance}
                        searchMinimumTime={searchMinimumTime}/>
        : <></>
      }
    </div>
  );
};

export default Search;
