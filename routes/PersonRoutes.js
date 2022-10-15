const express = require("express");
const Person = require("../models/Person");
const { response } = require("express");
const router = express.Router();

//get all people Data
router.get("/", async (req, res) => {
  const people = await Person.find();
  res.send(people);
});
//Add newperson
router.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const existPerson = await Person.findOne({ name: req.body.name });
    if (existPerson) {
      return res.status(400).send({ msg: "Person exists already" });
    }
    let newPerson = new Person({
     
      ...req.body,
    });
    await newPerson.save();
    res.send(newPerson);
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error);
  }
});
//Delete Person
router.delete("/:idDelete", async function (req, res) {
  try {
    const result = await Person.deleteOne({ _id: req.params.idDelete });
    if (result.deletedCount) {
      return res.send({ msg: "Person is deleted successfully" });
    } else {
      return res.status(400).send({ msg: "Person is already deleted" });
    }
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error);
  }
});
//Update people
router.put("/:idUpdate", async function (req, res) {
  try {
    const result = await Person.updateOne(
      { _id: req.params.idUpdate },
      { ...req.body }
    );
    if (result.modifiedCount === 1) {
      const updatedPerson = await Person.findOne({
        _id: req.params.idUpdate,
      });
      return res.send({
        msg: "Person data is Updated successfully",
        updatedPerson,
      });
    } else {
      return res.status(400).send({ msg: "Person data already Updated " });
    }
    res.send("test");
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error);
  }
});
//get One Person
router.get("/:id", async (req, res) => {
  try {
    const findOnePerson = await Person.findOne({ _id: req.params.id });
    res.send(findOnePerson);
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error);
  }
});

module.exports = router;
