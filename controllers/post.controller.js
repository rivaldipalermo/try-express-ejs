const Post = require("../models/Post");
const { post } = require("../routes/index.route");

module.exports = {
  index: async (req, res) => {
    const posts = await Post.findAll();
    return res.render("post/index", {
      posts,
    });
  },
  create: async (req, res) => {
    return res.render("post/create");
  },
  store: async (req, res) => {
    await Post.create(req.body);
    return res.redirect("/posts");
  },
  show: async (req, res) => {
    // galih's todo
    const posts = await Post.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!posts) {
      return res.redirect("/posts");
    }

    return res.render("post/edit", {
      posts,
    });
  },
  update: async (req, res) => {
    const posts = await Post.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!posts) {
      return res.redirect("/posts");
    }

    await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    return res.redirect("/posts");
  },
  delete: async (req, res) => {
    Post.destroy({ where: { id: req.params.id } });
    return res.redirect("/posts");
  },
};
