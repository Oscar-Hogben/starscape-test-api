const express = require('express');

const app = express();
app.use(express.json());
const port = 3000;

let topScore = 0;

app.get('/score', (req, res) => {
    console.log('Received Score Request!');
    res.send(topScore.toString());
});

app.post('/score', (req, res) => {
    console.log(req.body.Score);
    topScore = req.body.Score;
    res.send(topScore.toString());
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});