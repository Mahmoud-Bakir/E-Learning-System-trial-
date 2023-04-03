const { Router } = require("express");
const router = Router();

const { login, register,add } = require("../controllers/auth.contollers")

router.get("/login", login);
router.post("/register", register);
router.post("/add_document",add)

module.exports = router;