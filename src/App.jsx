import { useEffect, useState } from "react";
import "./App.css";
import Location from "./components/Location";
import axios from "axios";
import { getRandomLocation } from "./randomLocation";

function App() {
  const [location, setLocation] = useState(null);
  const [idLocation, setIdLocation] = useState("");

  const handleOnChange = (e) => {
    setIdLocation(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClick = () => {
    getInformation(idLocation);
  };

  const getInformation = (location) => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${location}`)
      .then(({ data }) => {
        setLocation(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  const URL = `https://rickandmortyapi.com/api/location/${getRandomLocation()}`;

  useEffect(() => {
    getInformation(getRandomLocation());
  }, []);

  return (
    <>
      <main className="w-[95%] max-w-[330px] mx-auto h-full px-1 md:max-w-3xl">
        <div className="text-center relative top-[-15px] w-screen mx-auto">
          <img className="max-w-[50%]" src="headerbg.png" alt="" />
        </div>
        
        <form className="flex m-3 text-center border-green-500 border-2 md:w-[60%] md:mx-auto" onSubmit={handleSubmit}>
          <input className="w-3/4 p-1 outline-none bg-black text-gray-400 placeholder:text-center" value={idLocation} onChange={handleOnChange} placeholder="Type a location id..." type="text" />
          <button className="bg-green-400 w-1/4 p-2" onClick={handleClick}>
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
          </button>
        </form>
        <Location location={location} setLocation={setLocation} />
      </main>
    </>
  );
}

export default App;
