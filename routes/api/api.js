const router = require("express").Router();
const { Workout } = require("../../models/workoutModel");

router.get("/", (req, res) => {
    Workout.aggregate([
        { $addFields: { totalDuration: { $sum: "$exercises.duration" } } }
    ])
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.put("/:id", async (req, res) => {
    await Workout.updateOne(
        { _id: req.params.id },
        { $push: { exercises: req.body } }
    ).then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(400).json(err);
    });
});

router.post("/", (req, res) => {
    Workout.create({})
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(400).json(err);
        });
});

router.get("/range", (req, res) => {
    Workout.aggregate([
        { $addFields: { totalDuration: { $sum: "$exercises.duration" } } }
    ]).sort({ _id: -1 })
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

module.exports = router;