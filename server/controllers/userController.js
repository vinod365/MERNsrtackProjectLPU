import {User} from "../models/userModel";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      status: "fail",
      message: err,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      status: "fail",
      message: "Please provide email and password",
    });
    return;
  }

  const user = await User.findOne({ email: email }).select("+password");

  if (!user || !( await user.correctpassword(password, user.password))) {
    res.status(400).json({
      status: "fail",
      message: "Either email or password is incorrect",
    });
    return;
  }

  const token = jwt.sign({ id: user._id }, "NeYXSdZC7b38XBYin3G4%0&2AWJ#HOpgjEs5", {
    expiresIn: "10d",
  });
  res.status(200).json({
    status: "suceess",
    token,
  });
};
