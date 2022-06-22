import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilSun,
  UilSunset,
  UilWind,
} from "@iconscout/react-unicons";

import {
  iconUrlFromCode,
  formatToLocalTime,
} from "../services/weatherServices";

export default function TempandDetails({
  weather: {
    details,
    icon,
    temp,
    temp_max,
    temp_min,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={iconUrlFromCode(icon)} alt="weather-icons" className="w-30" />
        <p className="text-3xl">{`${temp.toFixed()}°`}</p>
        <div className="flwx flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature className="mr-1" size={18} />
            Real fell :
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear className="mr-1" size={18} />
            Humidity :
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind className="mr-1" size={18} />
            Wind Speed :
            <span className="font-medium ml-1">{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center flex-row space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise :
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>
        <UilSunset />
        <p className="font-light">
          Set :
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>
        <UilArrowUp />
        <p className="font-light">
          High :
          <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>
        <UilArrowDown />
        <p className="font-light">
          Low :
          <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}
