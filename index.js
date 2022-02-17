const express = require('express');

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

let topScore = 0;
let orePrices = {"Korrelite": 1, "Reknite": 2};

app.get('/starscape/oreprices', (req, res) => {
    console.log('Received ore prices request');
    res.send(orePrices);
});

app.post('/starscape/oreprices', (req, res) => {
    let key = req.body.key.toString();
    if (key == "1lxwIhPKJDVl5YXDQ6XF"); {
        
        if (req.body.korrelite != undefined) {
            orePrices['Korrelite'] = parseFloat(req.body.korrelite.toString());
        };

        if (req.body.reknite != undefined) {
            orePrices['Reknite'] = parseFloat(req.body.reknite.toString());
        };
        
    };
    res.send(201);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});