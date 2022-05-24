// This is 'server.js' which was used for the Project 'cyf-london8-ability'
// Source: https://glitch.com/~cyf-london8-ability-app

// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
//app.use(express.json());

const cors = require("cors");
app.use(cors());

const PORT = process.env.port || 3001;

//load the courses JSON data
const theCourse = require("./courses.json");

// GET - SHOW SUCCESS

app.get("/api", function (request, response) {
  // Indicate that the server has loaded by sending the entire JSON file
  response.json(theCourse);
});

/*
GET a single week entry
*/

app.get("/api/week/:weekno", (request, response) => {
  let enteredWeek = "",
    theMailIndex;
  let okFlag = "weekno" in request.params;

  if (okFlag) {
    enteredWeek = Number(request.params.weekno);
    let result = theCourse.find((element) => element.id === enteredWeek);
    response.status(200).json(result);
  }

  if (!okFlag || theMailIndex < 0) {
    response.status(404).send(`No week exists with the id '${enteredWeek}'`);
    return;
  }
});

//Start our server so that it listens for HTTP requests!
app.listen(PORT, function () {
  console.log("Your app is listening on port " + PORT);
});
