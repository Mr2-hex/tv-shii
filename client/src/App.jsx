import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [ipAddress, setIpAddress] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3000/ip")
      .then((res) => {
        setIpAddress(res.data.ip);
      })
      .catch((err) => console.log(err));
  }, []);
  const reduceVolume = async () => {
    axios
      .get(`http://${ipAddress}:3000/volume/down`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const increaseVolume = async () => {
    axios
      .get(`http://${ipAddress}:3000/volume/up`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };
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
