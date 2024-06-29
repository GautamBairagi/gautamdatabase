const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');

const app = express();
const port = 3000;

app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1/mydb', {
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.get('/users', userController.getUsers);
app.post('/users', userController.createUser);
app.delete('/users/:id', userController.deleteUser);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});