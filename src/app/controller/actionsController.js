const { dialogflow } = require("actions-on-google");

const app = dialogflow({ debug: true });

app.intent("Default Welcome Intent", (conv) => {
  conv.add("Oi, Eu me chamo Ícaro Roberto.");
  conv.ask("Em que posso te ajudar?");
});

module.exports = app;
