import React from 'react';

const Path = ({ path }) => {
  const lastIndex = path.stations.length - 1;

  const pathResult = path.stations.map((station, index) => {
    const arrow = index === lastIndex ? <span className="mdi mdi-arrow-right-bold text-gray-500"/> : <></>
    return (
      (index === 0 || index === lastIndex) ? <>{arrow}<span className="font-bold">{station.name}</span></>
      : <><span className="mdi mdi-arrow-right-bold text-gray-500"/>
    <span className="text-gray-600">{station.name}</span></>
    );
  });

  return (
    <>
      <div className="px-2 py-4 border-b">
        <div className="w-full flex mb-3">
          <div className="inline-block w-1/2 border-r text-center">
            <div className="text-gray-600 text-sm">소요시간</div>
            <div>{path.duration}분</div>
          </div>
          <div className="inline-block w-1/2 text-center">
            <div className="text-gray-600 text-sm">거리</div>
            <div>{path.distance}km</div>
          </div>
        </div>
      </div>
      <div className="relative pt-3 pb-10">
        <div className="px-2 py-1 w-full flex">
          <div className="w-10/12 inline-block">
            {pathResult}
          </div>
        </div>
      </div>
    </>
  );
}

export default Path;
