const express = require('express');
const path = require('path');

const port = 3000;

const FrontEnd = path.join(__dirname, '..', 'client', 'dist');

const app = express();

app.use(express.static(FrontEnd));

app.listen(port, () => console.info(`http://localhost:${port}`));