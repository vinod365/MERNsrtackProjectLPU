import { Blog } from "../models/blogModel";

export const createBlog = async (req, res) => {
  try {
    const newblog = await Blog.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        blog: newblog,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getAllBlog = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({
      status: "success",
      data: {
        blogs,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      data: {
        message: err,
      },
    });
  }
};

export const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.query.blogId);
    res.status(200).json({
      status: "success",
      data: {
        blog,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "success",
      data: {
        message: err,
      },
    });
  }
};
export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.query.blogId, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        blog,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "success",
      data: {
        message: err,
      },
    });
  }
};
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.query.blogId);
    res.status(200).json({
      status: "success",
      data: {
        blog,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "success",
      data: {
        message: err,
      },
    });
  }
};
