const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI,{
    serverSelectionTimeoutMS: 300000,
    socketTimeoutMS: 30000,
    keepAlive: true,
    keepAliveInitialDelay: 300000,
  },
  { useNewUrlParser: true, useUnifiedTopology: true, poolSize: 10 });
}
module.exports = connectDB;