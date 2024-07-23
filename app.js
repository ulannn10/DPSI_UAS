require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authroutes');
const tourismRoutes = require('./routes/tourismroutes');
const messageRoutes = require('./routes/messageroutes');

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/tourism', tourismRoutes);
app.use('/api/messages', messageRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
