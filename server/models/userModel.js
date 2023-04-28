import { mongoose } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user must have a name"],
  },
  email: {
    type: String,
    required: [true, "A user must have a email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "A user must have a password"],
    minlength: 8,
    select: false,
  },
});

userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
  } catch (err) {
    console.log(err);
  }
});

userSchema.methods.correctpassword = async function (
  candidatepassword,
  userpassword
) {
  const result = await bcrypt.compare(candidatepassword, userpassword);
  return result;
};

export const User = mongoose.models.User || mongoose.model("User", userSchema);
