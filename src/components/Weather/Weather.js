import axios from "axios";
import React, { useState } from "react";
import "./Weather.css";

const Weather = () => {
  const [query, setQuery] = useState("");
  const [recive, setRecive] = useState([]);

  const url = `http://api.weatherstack.com/current?access_key=22e361e18bdab1d1c746fb73b8f169b4&query=${query}`;

  async function getWeatherData() {
    const result = await axios.get(url);
    setRecive([result.data]);
    console.log(result.data);
  }

  const handleWeatherData = (e) => {
    e.preventDefault();
    getWeatherData();
  };

  return (
    <div>
      <form onSubmit={handleWeatherData}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Added</button>
      </form>

      {recive.map((item) => {
        return (
          <div>
            <div>{item?.current?.temperature}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Weather;
