import { useRef } from "react";
import "./App.css";

const Api_key = "599da3b8dc658f8f9a384d9836d5937f";

function App() {
  const inputRef = useRef(null);
  const fatchWeather = async () => {
    const URL = "";
    console.log(inputRef.current.value);
  };
  return (
    <div className="bg-gray-800 h-screen grid place-items-center">
      <div className="bg-white w-96 p-4 rounded-md">
        <div className="flex items-center justify-between">
          <input
            type="text"
            ref={inputRef}
            placeholder="Enter Your Location "
            className="text-xl border-b p-1 border-gray-200 font-semibold uppercase"
          />
          <button onClick={fatchWeather}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/758/758651.png"
              alt="..."
              className="w-8"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
