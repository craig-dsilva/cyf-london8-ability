const express = require("express");
const app = express();
const data = require("./data.json");
// Express needs to be able to understand JSON when we send it in the Payload Body / req.body
app.use(express.json());

// Set in memory data. This is only for the demonstration, this is never really used in production level code, we will use an actual database later!

// Start the app and append all the methods (GET, POST, DELETE, PUT)
app
  .get("/", (req, res) => {
    res.send("Hello World!");
  })
  .post("/courses", (req, res) => {
    // get the name from the req.body. The req.body should be { name: "add new name here"}
    res.send(data);

    // This is the older way to respond to a request, we can now just use send.
    // res.status(200);
    // res.write("name added!" + names);
    // res.end();
  })
  .post("/age", (req, res) => {
    const { age } = req.body;
    ages.push(age);
    res.send("Number added!" + ages);
  })
  .delete("/:name", (req, res) => {
    // here we are using the params as opposed to the body. We can do both, this is just for an example.
    const { name } = req.params;
    names = names.filter((deletedName) => deletedName !== name);
    res.send("Name deleted!" + names);
  })
  .put("/:name", (req, res) => {
    const { newName } = req.body;
    // Map over the name array, if we find a name that matches the name in the parameters, change it to the new name which is in the body.
    names = names.map((name) => (name === req.params.name ? newName : name));
    res.send("New changed!" + names);
  })
  .get("/query", (req, res) => {
    // used to demonstrate query strings. Try using /query?name="michael"&age="27"&job="full stack dev"
    res.send("Query string detected!", req.query);
  });

app.listen(9000, () => {
  console.log("I'm alive!!!");
});
