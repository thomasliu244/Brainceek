// Include it and extract some methods for convenience
const server = require("server");
const { get, post } = server.router;
const { render, redirect } = server.reply;

const config = require("../../config/server.config.js");

// Launch server with options and a couple of routes
server(
  {
    port: config.port,
    public: config.files.public
  },
  [
    get("/", () => render(config.files.entries.html)),
    get("/", ctx => {
      console.log(`server is hosted onto 'localhost:${config.port}}'`);
      return "";
    })
  ]
);
