const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));

})


app.listen(5000, () => {
    console.log("hllo");
});