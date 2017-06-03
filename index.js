'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request');
const path = require('path');


app.use(express.static('app'))
app.use(express.static('public'));
app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({extended: true })); 
app.use(express.static(__dirname))
app.use(cors());

app.get('/',(req,res)=>{
	res.sendFile(path.resolve(__dirname,'./app/index.html'));
});

const port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});