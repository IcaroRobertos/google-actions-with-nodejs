const routes = require("express").Router();

const ActionsController = require("./app/controller/actionsController");

routes.get("/", (req, res) => {
  res.send({ ok: true });
});

routes.post("/", ActionsController);

module.exports = routes;
