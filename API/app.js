const express = require('express');

const app = express();

const mongoose = require('mongoose');

app.use(express.json)


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Aplication  🏃🏼‍♂️ at port ${port}`))