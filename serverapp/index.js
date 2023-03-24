const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());
app.use("/",require("./Employee/routes/EmployeeRouter"));

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/Senwell')
.then((res) => {
  console.log("connection successful");
});

app.get("/", (req, res) => {
    res.send(`<h1>welcome<h1/>`);
  }); 

 var server = app.listen(8000, () =>{
    var host = "127.0.0.1";
    var port = server.address().port;
  
    console.log(`listening at http://${host}:${port}`); 
  });
  
  