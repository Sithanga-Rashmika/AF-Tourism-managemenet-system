import express from "express";
import BlogModel from "../Models/Blog-model.js";

export const addBlog = async (req, res) => {
  let userId1 = req.params.id;
  let file = "N/A";
  if (req.file) {
    file = req.file.filename;
  }
  const title = req.body.title;
  const shortDescription = req.body.shortDescription;
  const fullDescription = req.body.fullDescription;
  console.log(req.body);

  const newBlog= new BlogModel({
    title,
    shortDescription,
    fullDescription,
    image: file,
  });
  console.log(newBlog);
  newBlog
    .save()
    .then(() => {
      res.json("Blog Added");
    })
    .catch((err) => {
      console.log(err);
    });
};
