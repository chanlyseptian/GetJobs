require('dotenv').config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const cors  = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

const routes = require('./routes')
app.use(routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})