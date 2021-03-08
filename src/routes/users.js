const router = require("express").Router();

const {
  renderSignUpForm,
  singup,
  renderSigninForm,
  signin,
  logout
} = require("../Controllers/users");

// Routes
router.get("/Users/signup", renderSignUpForm);

router.post("/Users/signup", singup);

router.get("/Users/signin", renderSigninForm);

router.post("/Users/signin", signin);

router.get("/Users/logout", logout);

module.exports = router;

