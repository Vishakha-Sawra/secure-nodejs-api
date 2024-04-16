const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000 || 8000;
require('dotenv').config();
const connectDB = require('./utils/db');
const cookieParser = require('cookie-parser');

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
const userRoutes = require('./routes/userRoutes');
app.use('/', userRoutes);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});