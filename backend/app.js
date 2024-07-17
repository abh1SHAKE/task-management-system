const express = require('express');
const app = express();
const {mongoose} = require('./database/mongoose');

const listRoutes = require('./routes/listRoutes');
const taskRoutes = require('./routes/taskRoutes');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/sebastian", (req,res) => {
    res.send("But here comes Sebastian Vettel");
})

app.use('/',listRoutes);
app.use('/',taskRoutes);

app.listen(3000,() => {
    console.log("Server listening on port 3000");
})