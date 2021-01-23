const express = require('express')
const router = express.Router();


router.get('/list', getAllUser);
router.get('/add', addUser);
router.get('/update/:id', getUpdateUser);


var users = [
    { id: 1, name: "naresh" },
    { id: 2, name: "sanjay" }
];

// list All
async function getAllUser(req, res) {
    res.json(users);
}


//add users
async function addUser(req, res) {

    let userId = req.query.id;
    let userName = req.query.name;
    let user = { id: userId, name: userName };
    users.push(user);
    res.send("success");

}


//Update


async function getUpdateUser(req, res) {
    let id = req.params.id;
    let newName = req.query.name;

    let index = users.findIndex(obj => obj.id == id);
    let userObj = users[index];
    userObj.name = newName;
    users[index] = userObj;
    res.send("success");
} 


module.exports = router;