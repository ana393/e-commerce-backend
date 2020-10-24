const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: [true, "Your email is required!"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "The password is requied!"],
      minlength: 8,
    },
    role: {
      type: String,
      default: "user",
      enum: ["admin", "seller", "user"],
    },
  },
  {
    timestamps:true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);
UserSchema.pre('save', async function(next) {
  try {
    const user = this;
   user.password = await bcrypt.hash(user.password, 9)
   next()
  } catch (error) {
    console.error(error)
  }
})
const User = mongoose.model("User", UserSchema);
module.exports = User;
