// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  app.get("/hungrylonewolf", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/hungrylonewolf.html"));
  });

  app.get("/restawant", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/restawant.html"));
  });

  app.get("/routeme", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/routeme.html"));
  });

  app.get("/fashionscraper", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/fashionscraper.html"));
  });

  app.get("/nytreact", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/nytreact.html"));
  });

  app.get("/bamazon", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/bamazon.html"));
  });

  app.get("/liribot", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/liribot.html"));
  });

  app.get("/crystalcollector", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/crystalcollector.html"));
  });

  app.get("/eatdaburger", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/eatdaburger.html"));
  });

  app.get("/friendfinder", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/friendfinder.html"));
  });

  app.get("/nodeflashcard", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/nodeflashcard.html"));
  });

  app.get("/trainscheduler", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/trainscheduler.html"));
  });

  app.get("/giphygifs", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/giphygifs.html"));
  });

  app.get("/hollywoodtrivia", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/hollywoodtrivia.html"));
  });

  app.get("/avengershangman", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/avengershangman.html"));
  });
  // If no matching route is found default to home
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });
};
