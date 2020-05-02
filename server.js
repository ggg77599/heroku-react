const express = require("express");
const cors = require('cors')
const path = require("path");
const port = process.env.PORT || 8080; // listening port
const app = express();

// enable cors while develop
app.use(cors());

// serve react static files
// the __dirname is the current directory from where the script is running
app.use(express.static(path.join(__dirname, "build")));

// api
app.get("/api/getList", function(req, res) {
  const listObj = {"list" :[ "list 1", "list 2", "list 4" ] };
  //res.setHeader('Content-Type', 'application/json');
  res.json(listObj);
  //res.send(listObj);
});

// match other path that are not static files
// redirect to index.html to return 404
app.get("/*", function(req, res) {
  // index.html
  //res.sendFile(path.join(__dirname, "build", "index.html"));

  // 404
  res.status(404);
  res.send("404 Not Found!");
});

app.listen(port, () => {
  console.log("Listening on port", port);
});
