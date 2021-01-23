const express = require('express')
const router = express.Router();

router.get('/list', getAllTasks);
router.get('/view/:id', getTask);

router.get('/add', addTask);
router.get('/update/:id', updateTask);
router.get('/delete/:id', deleteTask);

var tasks = [
    { id: 1, name: "task1" }
];

//addtasks
async function addTask(req, res) {
    let taskId = req.query.id;
    let taskName = req.query.name;
    let task = { id: taskId, name: taskName };
    tasks.push(task);
    res.send("Success");
}

async function deleteTask(req,res){
    let taskId = req.params.id;
    const index = tasks.findIndex(obj => obj.id == taskId);
    if (index >=0){
        tasks.splice(index,1);
        res.send("Success");
    }
    else{
        res.send("Id not found");
    }
    

}
// list All
async function getAllTasks(req, res) {
    res.json(tasks);

}

//search by tasks by id
async function getTask(req, res) {

    let id = req.params.id;
    let task = tasks.find(obj => obj.id == id);

    //res.send(JSON.stringify(task))
    res.json(task);
}



async function updateTask(req, res) {
    let id = req.params.id;
    let newName = req.query.name;

    let index = tasks.findIndex(obj => obj.id == id);
    let task = tasks[index];
    task.name = newName;
    tasks[index] = task;
    res.send("success");
}

module.exports= router;