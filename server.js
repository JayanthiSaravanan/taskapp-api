const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('TodoAPI!'));
app.get('/alltasks', getAllTasks);

var tasks =[ 
    {id : 1, name: "task1"}
];

async function getAllTasks(req,res)
{
    res.json(tasks);

}
app.listen(port, () => console.log(`Example app listening on port port!`))

