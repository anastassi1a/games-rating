const http = require("http");
const path = require("path");
const { gameRouteController, defaultRouteController, mainRouteController, voteRouteController } = require("./controllers");

const PORT = 3005;

const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
      mainRouteController(res, "/index.html", ".html");
      break;
      case '/game':
        gameRouteController(res);
        break;
        case '/vote':
          voteRouteController(req, res);
      default:
        defaultRouteController(res, url);
        break;
  }
});

server.listen(PORT);