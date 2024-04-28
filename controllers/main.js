const { getData, endpoints } = require("../appModules/api");
const { config } = require("../appModules/rating")
const { makeRatingFile } = require("../appModules/rating");
const { staticFile } = require("../appModules/http-utils");

async function mainRouteController(res, publicUrl, extname) {
  const data = await getData(endpoints.games);
  await makeRatingFile(config.PATH_TO_RATING_FILE, data);
  res.statusCode = 200;
  staticFile(res, publicUrl, extname);
}

module.exports = mainRouteController;
