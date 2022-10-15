const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  Name: { type: String, required: true, uppercase: true, trim: true }, 
  favoriteFoods: [string],
  age: Number,

});
module.exports= Person = mongoose.model("person", personSchema);