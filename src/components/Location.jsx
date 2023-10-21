import React from "react";
import ResidentCard from "./ResidentCard";

const Location = ({ location }) => {
  return (
    <>
      <main className=" text-green-600 p-1 text-center border-green-400 border-[2px] m-2">
        <section>
          <div>¡Wellcome to {location?.name}!</div>
        </section>
        <section className="flex flex-col gap-2 justify-center text-gray-400">
          <span className="p-1">Type: {location?.type} </span>
          <span className="p-1">Dimension: {location?.dimension}</span>
          <span className="p-1">Population: {location?.residents.length}</span>
        </section>
      </main>
      <div className="flex m-3 text-center border-green-500 border-2 bg-green-400">
        <input
          className="p-1 outline-none bg-black text-gray-400 placeholder:text-center"
          type="text"
          name="location"
          placeholder="Type a location id..."
        />
        <label className=" w-full p-1 hover:cursor-pointer" htmlFor="location">
          <svg
            className="inline"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
            <path d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z" />
          </svg>
        </label>
      </div>
      <div>
        {location?.residents.map((resident, index) => (<div key={index}>
            <ResidentCard residentLocation={resident}  />
          </div>
        ))}
      </div>
    </>
  );
};

export default Location;
