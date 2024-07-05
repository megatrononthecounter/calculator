const express = require('express');
const path = require('path');
const calculate = require('./calcLogic.js');

const app = express();
const port = process.env.PORT || 8000;
const router = express.Router();

app.use(express.static(path.join(__dirname, 'public'))) 
app.use(express.json());

// sendFile will go here
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/calculator.html'));
    });

    router.get('/secondPage', function(req, res) {
      res.sendFile(path.join(__dirname, '/secondPage.html'));
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

 const answer = calculate(n1, n2, '+');

 res.json({
    "answer": answer
 });
});

// subtract request
app.post('/subtract', function(req, res) {
    const n1 = Number(req.body.number1);
    const n2 = Number(req.body.number2);
   
    const answer = calculate(n1, n2, '-');
   
    res.json({
       "answer": answer
    });
   });

   // multiply request
app.post('/multiply', function(req, res) {
    const n1 = Number(req.body.number1);
    const n2 = Number(req.body.number2);
   
    const answer = calculate(n1, n2, '*');
   
    res.json({
       "answer": answer
    });
   });

   // divide request
app.post('/divide', function(req, res) {
    const n1 = Number(req.body.number1);
    const n2 = Number(req.body.number2);
   
    const answer = calculate(n1, n2, '/');
   
    res.json({
       "answer": answer
    });
   });

   // exponent request
app.post('/exponent', function(req, res) {
    const n1 = Number(req.body.number1);
    const n2 = Number(req.body.number2);
   
    const answer = calculate(n1, n2, '^');
   
    res.json({
       "answer": answer
    });
   });

app.use('/', router);
app.listen(port);   
console.log('server started at http://localhost:' + port);
