const express = require('express');
const admin = require('./Config/FireBaseConfig');
const router = require("./router")
const app = express();
const PORT = 3000;




app.set('view engine', 'ejs');
app.set('views', './Frontend/pages');
app.use(express.static('Frontend'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/",router);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));