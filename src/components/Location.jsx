import React, { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";


const Location = ({ location }) => {
  return (
    <>
      <section className=" bg-[url(bgheader.png)] text-green-600 p-1 text-center border-green-400 border-[2px] m-2">
        <section>
          <div>¡Wellcome to {location?.name}!</div>
        </section>
        <section className="flex flex-col gap-2 justify-center text-gray-400">
          <span className="p-1">Type: {location?.type} </span>
          <span className="p-1">Dimension: {location?.dimension}</span>
          <span className="p-1">Population: {location?.residents.length}</span>
        </section>
      </section>

      <div>
        {location?.residents.map((resident) => (
          <div key={resident}>
            <ResidentCard residentLocation={resident} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Location;
