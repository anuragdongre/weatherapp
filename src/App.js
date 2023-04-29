import { useRef, useState } from "react";
import "./App.css";

const Api_key = "599da3b8dc658f8f9a384d9836d5937f";

function App() {
  const inputRef = useRef(null);
  const [apiData, setapiData] = useState(null);
  const [showWeather, setshowWeather] = useState(null);

  const WeatherTypes = [
    {
      type: "Clear",
      img: "https://cdn-icons-png.flaticon.com/512/6974/6974833.png",
    },
    {
      type: "Rain",
      img: "https://cdn-icons-png.flaticon.com/512/3351/3351979.png",
    },
    {
      type: "Snow",
      img: "https://cdn-icons-png.flaticon.com/512/642/642102.png",
    },
    {
      type: "Clouds",
      img: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
    },
    {
      type: "Haze",
      img: "https://cdn-icons-png.flaticon.com/512/1197/1197102.png",
    },
    {
      type: "Smoke",
      img: "https://cdn-icons-png.flaticon.com/512/4380/4380458.png",
    },
    {
      type: "Mist",
      img: "https://cdn-icons-png.flaticon.com/512/4005/4005901.png",
    },
    {
      type: "Deizzle",
      img: "https://cdn-icons-png.flaticon.com/512/3076/3076129.png",
    },
  ];

  const fatchWeather = async () => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&units=metric&appid=${Api_key}`;
    // console.log(inputRef.current.value);

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        // console.log("--data", data);
        setapiData(null);
        //Array of obj
        if (data.cod == 404 || data.code == 400) {
          setshowWeather([
            {
              type: "Not Found",
              img: "https://cdn-icons-png.flaticon.com/512/4275/4275497.png",
            },
          ]);
        }
        setshowWeather(
          WeatherTypes.filter(
            (weather) => weather.type === data.weather[0].main
          )
        );
        console.log(data);
        setapiData(data);
      })
      .catch((err) => {
        console.log(err);
      });
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
        <div>
          {showWeather && (
            <div className="text-center  flex-col gap-6 mt-10">
              {apiData && (
                <p className="text-xl font-semibold">
                  {apiData?.name + "," + apiData?.sys?.country}
                </p>
              )}
              <img
                src={showWeather[0]?.img}
                alt="..."
                className="w-52 mx-auto"
              />
              <h3 className="text-2xl font-bold text-zinc-800">
                {showWeather[0]?.type}
              </h3>
              {apiData && (
                <>
                  <div className="flex justify-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/7794/7794499.png"
                      alt="..."
                      className="h-9 mt-1"
                    />
                    <h2 className="text-4xl font-extrabold">
                      {apiData?.main?.temp}&#176;c
                    </h2>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
