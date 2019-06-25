const Pets = require('../controllers/Pets');

module.exports = (app) => {
    app.get("/api/pets", Pets.getAll);
    app.post("/api/create", Pets.create);
    app.get("/api/pets/:_id", Pets.getOne);
    app.put("/api/pets/:_id", Pets.update);
    app.delete("/api/pets/:_id", Pets.delete);
}