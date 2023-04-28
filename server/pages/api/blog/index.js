import mongoose from "mongoose";
import { getAllBlog , getBlog as getBlogByID, createBlog } from "../../../controllers/blogController.js";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

mongoose.connect("mongodb://localhost:27017/blog").then((con) => {
  console.log("Database connection started");
});

export default function handler(req, res) {
  const { method } = req;
  if (method == "GET") getAllBlog(req, res);
  else if (method == "POST") createBlog(req,res);
}







exports.mongoose = mongoose;
