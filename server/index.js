import express from "express";
import cors from "cors";
import Chance from "chance";

// Initialize the express app
const app = express();
const chance = new Chance();

app.use(cors());
app.use(express.json());

//make some animals
const animals = [...Array(250).keys()].map((id) => {
  return {
    id,
    type: chance.animals(),
    age: chance.age(),
    name: chance.name(),
  };
});

// Endpont to serach for animals
app.get("", (req, res) => {
  // Filter results by query
});
