const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('TodoAPI!'));
app.get('/alltasks', getAllTasks);

var tasks =[ 
    {id : 1, name: "task1"}
];

// list All
async function getAllTasks(req,res)
{
    res.json(tasks);

}

//search by tasks by id
app.get('/tasks/:id',(req,res)=> {

    let id =req.params.id;
    let task =tasks.find(obj => obj.id==id);

res.send(JSON.stringify(task))
});


app.listen(port, () => console.log(`Example app listening on port port!`))

