const mongoose = require("mongoose");
// console.log(process.env)

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database successfully connected");
  } catch (error) {
    console.log(error.message);
  }

  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
// module.exports = mongoose.model("Shops", shopSchema);
module.exports = connectDB;
