const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

app.use(express.json());

// Define your routes here

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
const taskRouter = require('./routes/tasks');
app.use('/tasks', taskRouter);
