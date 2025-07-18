import express from "express";
import dotenv from "dotenv";
import loudness from "loudness";
import cors from "cors";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

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

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
