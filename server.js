const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

 const staffController =require ('./controllers/staffController');

const app = express();
const port = 3000;

app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1/mydb', {
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));



app.get('/staff', staffController.getStaff);
app.post('/staff',staffController.createSatff);
app.delete('/staff/:id', staffController.deleteStaff)




app.listen(port, () => {
  console.log(`Server.js running on port ${port}`);
});