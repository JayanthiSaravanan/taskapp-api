const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const taskRouter = require('./task.router');
const userRouter = require('./user.router');

app.get('/', (req, res) => res.send('TodoAPI!'));
app.use("/tasks", taskRouter);
app.use("/users", userRouter);

app.listen(port, () => console.log(`Example app listening on port port!`))

