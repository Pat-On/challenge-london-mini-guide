const express = require("express");
const PORT = process.env.PORT || 3000;

const app = express();

const stratfordData = require("./data/Stratford.json");
const heathrowData = require("./data/Heathrow.json");
const harrowData = require("./data/Harrow.json");

const data = {
  stratford: stratfordData,
  heathrow: heathrowData,
  harrow: harrowData,
};

app.get("/:city/:category", (req, res) => {
  const queryCity = req.params.city;
  const queryCategory = req.params.category;

  if (!data[queryCity]) {
    res.status(404).json({
      msg: "No exist",
    });
  } else {
    res.status(200).json({
      data: data[queryCity][queryCategory],
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
