import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const reduceVolume = async () => {
    axios
      .get("http://192.168.116.105:3000/volume/down")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const increaseVolume = async () => {
    axios
      .get("http://192.168.116.105:3000/volume/up")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {}, []);
  return (
    <>
      <div>
        <button onClick={reduceVolume}>Reduce Volume</button>
        <button onClick={increaseVolume}>Increase Volume</button>
      </div>
    </>
  );
};

export default App;
