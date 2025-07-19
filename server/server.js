import express from "express";
import dotenv from "dotenv";
import loudness from "loudness";
import cors from "cors";
import os from "os";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

//Ip function
function getLocalIpAddress() {
  const interfaces = os.networkInterfaces();
  for (let name in interfaces) {
    for (let iface of interfaces[name]) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return "localhost";
}

app.use(cors());
app.use(express.json());

app.get("/volume/up", async (req, res) => {
  let vol = await loudness.getVolume();
  let newVol = Math.min(vol + 10, 100);
  await loudness.setVolume(newVol);
  res.send(`Volume Was Increased to ${newVol}`);
});

app.get("/volume/down", async (req, res) => {
  let vol = await loudness.getVolume();
  let newVol = Math.min(vol - 10, 100);
  await loudness.setVolume(newVol);
  res.send(`Volume Was decreased to ${newVol}`);
});

app.get("/ip", (req, res) => {
  const ip = getLocalIpAddress();
  res.send({ ip });
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
