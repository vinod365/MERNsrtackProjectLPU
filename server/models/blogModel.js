import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A blog must have a title"],
  },
  desc: {
    type: String,
    required: [true, "A blog must have some content"],
  },

  image: {
    type: String,
    required: [true, "A blog must have image"],
  },

});

export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
