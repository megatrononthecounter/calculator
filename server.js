const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'public'))) 
app.use(express.json());

// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/calculator.html'));
    });

// API text
app.get('/HelloWorld', function(req, res) {
    res.json({
        "Message": "Hello World!"
    });
});

// add request
app.post('/add', function(req, res) {
 const n1 = Number(req.body.number1);
 const n2 = Number(req.body.number2);

 const answer = n1 + n2;

 res.json({
    "answer": answer
 });
});


app.listen(port);   
console.log('server started at http://localhost:' + port);
