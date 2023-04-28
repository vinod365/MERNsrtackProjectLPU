import mongoose from "mongoose";
import { login } from "@/controllers/userController";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

mongoose
  .connect("mongodb://localhost:27017/users")
  .then((con) => {
    console.log("Database connection started");
  })
  .catch((err) => {
    console.log(
      "Unable to connect to the server at mongodb://localhost:27017/users"
    );
  });

export default function handler(req, res) {
  const { method } = req;
  if (method == "POST") {
    login(req, res);
  } else {
    console.log(method);
    res.status(400).json({
      status: "fail",
      message: "This HTTP method is not yet supported",
    });
  }
}

exports.mongoose = mongoose;



