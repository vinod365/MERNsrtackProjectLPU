import mongoose from "mongoose";
import { getBlog as getBlogByID , updateBlog,deleteBlog} from "../../../controllers/blogController.js";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

mongoose.connect("mongodb://localhost:27017/blog").then((con) => {
  console.log("Database connection started");
});

export default function handler(req, res) {
  const { method } = req;

  if (method == "GET") getBlogByID(req, res);
  else if (method == "PATCH") updateBlog(req, res);
  else if (method == "DELETE") deleteBlog(req, res);
  else {
    res.status(401).json({
        status: "fail",
        message: "This HTTP method is not supported at this route"
    })
  }
}

exports.mongoose = mongoose;
