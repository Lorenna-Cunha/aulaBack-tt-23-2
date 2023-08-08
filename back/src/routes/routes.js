const { Router } = require("express");
const router = Router();

const UserController = require("../controllers/UserController");

router.post("/User", UserController.create);
router.get("/User /:id", UserController.show); 
router.get("/User", UserController.index); 
router.get("/listFollowing/:id", UserController.listFollowing);
router.get("/listFollowed/:id", UserController.listFollowers);
router.put("/User/:id", UserController.update);
router.delete("/User/:id", UserController.destroy);

module.exports = router;
