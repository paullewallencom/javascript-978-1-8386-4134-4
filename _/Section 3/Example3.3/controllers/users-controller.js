const router = require("express").Router();
const UserService = require("../services/user-service");

const userService = new UserService();

router.get("/", (req, res) => {
    userService.findAll().then(users => {
        res.send(users);
    });
});

router.get("/:name", (req, res) => {
    userService.findOneByName(req.params.name).then(users => {
        res.send(users);
    });
});

router.post("/", (req, res) => {
    userService.create(req.body).then(user => {
        res.send(user);
    });
});

router.delete("/:id", (req, res) => {
    userService.delete(req.params.id).then(() => {
        res.sendStatus(200);
    });
});

module.exports = router;