import React from 'react';

const SearchInput = ({ departureStation, arrivalStation, changeStationsInput, searchShortestDistance }) => {
  return (
    <>
      <div className="flex flex-wrap mb-3">
        <div className="w-5/12 h-12 text-center text-gray-800">
          <input
            className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            id="departure-station-name"
            type="text"
            placeholder="출발역"
            name="departureStation"
            value={departureStation}
            onChange={changeStationsInput}
          />
        </div>
        <div className="w-2/12 h-12 text-center text-gray-800 flex justify-center items-center">
          <span className="mdi mdi-arrow-right-thick relative bottom-6px text-lg"/>
        </div>
        <div className="w-5/12 h-12 text-center text-gray-800">
          <input
            className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            id="arrival-station-name"
            type="text"
            placeholder="도착역"
            name="arrivalStation"
            value={arrivalStation}
            onChange={changeStationsInput}
          />
        </div>
      </div>
      <button type="submit" id="search-button"
              className="w-full text-sm bg-yellow-500 hover:bg-yellow-400 hover:text-gray-700 text-gray-800 font-bold py-2 px-4 rounded-sm"
              onClick={searchShortestDistance}>
        검색
      </button>
    </>
  );
};

export default SearchInput;