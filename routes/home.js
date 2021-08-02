const router = require("express").Router();
const path = require("path");

//Home page
router.get("/", function (req, res) {
  try {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  } catch (err) {
    res.status(500).json(err);
  }
});

//Exercises
router.get("/exercise", function (req, res) {
  try {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  } catch (err) {
    res.status(500).json(err);
  }
});

//Specific exercise
router.get("/exercise/:id", function (req, res) {
  try {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  } catch (err) {
    res.status(500).json(err);
  }
});

//Stats page
router.get("/stats", function (req, res) {
  try {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;