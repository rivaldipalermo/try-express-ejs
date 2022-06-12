const indexController = require("../controllers/index.controller");
const postController = require("../controllers/post.controller");
const auth = require("../middlewares/auth");

const router = require("express").Router();

router.get("/", indexController.index);

router.get("/posts", postController.index);
router.get("/posts/create", postController.create);
router.post("/posts/store", postController.store);
router.get("/posts/:id", postController.show);
router.put("/posts/:id", postController.update);
router.delete("/posts/:id/delete", postController.delete);

module.exports = router;
