import React, { useState } from 'react';
import Path from './Path';
import { PATH_TYPE } from '../utils/constants';

const SearchResult = ({ path, searchShortestDistance, searchMinimumTime }) => {
  const [pathType, setPathType] = useState(PATH_TYPE.DISTANCE);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClickFavoriteBtn = () => {
    setIsFavorite(!isFavorite);
  }

  const handleClickDistanceTab = () => {
    setPathType(PATH_TYPE.DISTANCE);
    searchShortestDistance();
  }

  const handleClickDurationTab = () => {
    setPathType(PATH_TYPE.DURATION)
    searchMinimumTime();
  }

  return (
    <div id="search-result-container"
         className="max-w-sm w-full lg:width-350px rounded bg-white shadow-lg p-6 relative border top">
      <button
        id="favorite-button"
        className={
          isFavorite
            ? "favorite-button bg-yellow-500 text-orange-500 mdi mdi-star absolute text-white bg-transparent d-inline-block font-semibold py-2 px-3 hover:border-transparent rounded-full z-10"
            : "favorite-button bg-yellow-500 mdi mdi-star-outline absolute text-white bg-transparent d-inline-block font-semibold py-2 px-3 hover:border-transparent rounded-full z-10"}

        onClick={handleClickFavoriteBtn}
      >
      </button>
      <ul className="flex border-b w-full">
        <li id="shortest-distance-tab"
            className={"-mb-px w-2/4 " + (pathType === PATH_TYPE.DISTANCE ? 'active-tab' : '') + " tab-menu"}>
          <a
            className="w-full text-center inline-block py-2 px-4 font-semibold"
            href="#"
            onClick={handleClickDistanceTab}>
            최단거리
          </a>
        </li>
        <li id="minimum-time-tab"
            className={"-mb-px w-2/4 " + (pathType === PATH_TYPE.DURATION ? 'active-tab' : '') + " tab-menu"}>
          <a
            className="w-full text-center bg-white inline-block py-2 px-4 font-semibold"
            href="#"
            onClick={handleClickDurationTab}
          >최소시간</a
          >
        </li>
      </ul>
      <Path path={path}/>
    </div>
  );
};

export default SearchResult;