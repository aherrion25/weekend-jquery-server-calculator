const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.static('server/public'));
app.use(express.urlencoded());

let mathArray = [];

app.get('/calculator', (req, res) => {
    console.log('in calculator');
    res.send(mathArray);
});

app.post('/calculator', (req, res) => {
    let inputMath = req.body;
    let mathAnswer = 0;
     
    inputMath.inputOne = Math.floor(inputMath.inputOne)
    inputMath.inputTwo = Math.floor(inputMath.inputTwo)

    if (inputMath.mathInput === '+'){
        mathAnswer = inputMath.inputOne + inputMath.inputTwo
    } else if (inputMath.mathInput === '-'){
        mathAnswer = inputMath.inputOne - inputMath.inputTwo
    }  else if (inputMath.mathInput === '*'){
        mathAnswer = inputMath.inputOne * inputMath.inputTwo
    }  else if (inputMath.mathInput === '/'){
        mathAnswer = inputMath.inputOne / inputMath.inputTwo
    }
    inputMath.answer = mathAnswer
    mathArray.push(inputMath);
    res.sendStatus(200);
})




app.listen(port, () => {
    console.log('listening on port', port);
});