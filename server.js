const express = require('express');
const studentsRoutes = require('./routes');

const app = express();
const port = 3001;
app.use(express.json());

app.use('/api/students', studentsRoutes);
app.listen(port, () => console.log(`App listing on port ${port}`));