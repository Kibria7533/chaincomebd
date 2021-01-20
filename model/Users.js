const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    fullname: {
      type: String,
    },
    username: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    dateofbirth: {
      type: String,
    },
    gender: {
      type: String,
    },
    postcode: {
      type: String,
    },
    paymenttype: {
      type: String,
    },
    transactionid: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
    password: {
      type: String,
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
    activeToken: String,
    earning: {
      type: String,
      default: 0,
    },
    myparentref: {
      type: String,
    },
    myref: {
      type: String,
    },
    myrefused: {
      type: String,
    },
    clicked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = model("users", UserSchema);
