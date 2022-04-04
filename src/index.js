const express = require("express");
const bodyParser = require("body-parser")

const app = express();
const PORT = process.env.PORT || 3333;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    return res.send("<h1>SERVER RUNNING</h1>")
})

require('./controllers/index')(app);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})