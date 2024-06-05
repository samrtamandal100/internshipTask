const express = require('express');
const axios = require('axios');
const app = express();
require('dotenv').config();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));


app.use("/",require("./Route/routes"))

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
