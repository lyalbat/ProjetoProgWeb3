const { Router } = require("express");
const router = Router();
const NavesController = require("../controllers/navesController");

router.post("/", NavesController.createNave);

router.get("/", NavesController.getAllNaves);

router.get("/:id", NavesController.getNaveById);

router.patch("/:id", NavesController.updateNave);

router.delete("/:id", NavesController.deleteNave);

module.exports = router;
