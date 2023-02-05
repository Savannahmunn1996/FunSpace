const Joi = require("joi");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
const facts = [
  { id: 1, idea: "sharks are animals!" },
  { id: 2, idea: "people are social creatures" },
];

app.get("/", (req, res) => {
  res.send("hey people!");
});

app.get("/api/coolfacts", (req, res) => {
  res.send(facts);
  if (!facts) {
    res.status(404);
  }
});

app.get("/api/coolfacts/:id", (req, res) => {
  let fact = facts.find((f) => f.id === parseInt(req.params.id));
  res.send(fact);
});
app.post("/api/example", (req, res) => {
  let fact = {
    id: facts.length + 1,
    idea: req.body.idea,
  };
  facts.push(fact);
  res.send(fact);
});

app.put("/api/coolfacts/:id", (req, res) => {
  const fact = facts.find((f) => f.id === parseInt(req.params.id));
  if (!fact) res.status(404).send("aww man!");
});

app.listen(PORT, () =>
  console.log(`server is running on port ${PORT}!Better catch up!`)
);
