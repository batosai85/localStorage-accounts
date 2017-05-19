var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
app.use("/", express.static(__dirname + "/public/views"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/libs", express.static(__dirname + "/public/libs"));
app.use("/mods", express.static(__dirname + "/node_modules"));

app.listen(PORT, "127.0.0.1", function(err,success){
    err ? console.log("error") : 
          console.log("server starting...");
});
