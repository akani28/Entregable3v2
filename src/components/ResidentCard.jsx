import axios from "axios";
import React, { useEffect, useState } from "react";

const ResidentCard = ({ residentLocation }) => {
  const [resident, setResident] = useState(null);
  useEffect(() => {
    axios
      .get(residentLocation)
      .then(({ data }) => {
        setResident(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="text-white flex flex-wrap justify-center items-center border-green-500 border-[3px] m-3">
      <section className="">
        <div className="mb-1">
          <img src={resident?.image} alt="" />
        </div>
        <div className="relative items-center  w-[150px] left-[70px] bottom-[80px] bg-black bg-opacity-70 flex justify-center   gap-4 border-green-500 border-2">
          {resident?.status === "Alive" && (
            <p className="bg-green-500 rounded-3xl  w-[20px] h-[20px] "></p>
          )}
          {resident?.status === "Dead" && (
            <p className="bg-red-700 rounded-3xl  w-[20px] h-[20px] "></p>
          )}
          {resident?.status === "unknown" && (
            <p className="bg-gray-400 opacity-100 rounded-3xl  w-[20px] h-[20px] "></p>
          )}

          <span>{resident?.status}</span>
        </div>
        <article>
          <div className="text-center">
            <h3>{resident?.name}</h3>
          </div>
          <section className="flex gap-4 p-2">
            <div className="text-gray-500">
                <p>Species</p>
                <p>Origin</p>
                <p>Times appear</p>
            </div>
            <div>
                <p>{resident?.species}</p>
                <p>{resident?.origin.name}</p>
                <p>{resident?.episode.length}</p>
            </div>
          </section>
          
        </article>
      </section>
    </div>
  );
};

export default ResidentCard;
