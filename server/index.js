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
    type: chance.animal(),
    age: chance.age(),
    name: chance.name(),
  };
});

// Endpont to serach for animals
app.get("", (req, res) => {
  const q = req.query.q?.toLowerCase() || "";
  const results = animals.filter((animal) =>
    animal.type.toLowerCase().includes(q)
  );
  res.send(results);
});

app.listen(8080, () => console.log("Listening on port http://localhost:8080"));
