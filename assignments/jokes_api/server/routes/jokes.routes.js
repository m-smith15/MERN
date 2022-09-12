const Jokecontroller = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/jokes/", Jokecontroller.findAllJokes);
    app.get("/api/jokes/:id", Jokecontroller.findOneSingleJoke);
    app.put("/api/jokes/update/:id", Jokecontroller.updateExistingJoke);
    app.post("/api/jokes/new", Jokecontroller.createNewJoke);
    app.delete("/api/jokes/delete/:id", Jokecontroller.deleteAnExistingJoke);
};