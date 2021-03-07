const mongodb = require("mongoose");

const modelUser = new mongodb.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    require: [true, "Masukan Email"],
    unique: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
});

const DataUser = mongodb.model("users", modelUser);

module.exports = DataUser;
