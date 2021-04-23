const path = require('path');
const express = require('express');
const app = express();
const port = 9000

const sequelize = require('./util/database');
const Todo = require('./models/todo');

const todoRoutes = require('./routes/todo')

app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: '20mb' }));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(todoRoutes);

sequelize.sync({ alter: true })
    .then(() => {
        console.log("All models were synchronized successfully.");
    }).catch(error => {
        console.log(error)
    })

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        success: false,
        error: {
            status: error.status || 500,
            message: error.message || 'Internal Server Error',
            error: error
        },
    });
});

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`)
})

