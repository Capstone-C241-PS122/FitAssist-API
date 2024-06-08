const prisma = require("../prisma");

const home = (req, res) => {
  res.json({ message: "Ini adalah home" });
};

const account = (req, res) => {
  res.json({ message: "Ini adalah account" });
};

const history = (req, res) => {
  res.json({ message: "Ini adalah history" });
};

const saved = (req, res) => {
    res.json({ message: "Ini adalah saved" });
  };

const feedback = (req, res) => {
    res.json({ message: "Ini adalah feedback" });
  };

const mybody = (req, res) => {
res.json({ message: "Ini adalah My Body" });
};


module.exports = { home, account, history, feedback, mybody, saved };
