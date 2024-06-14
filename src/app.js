const express = require("express");
const PORT = 8080;
const app = express();

app.use(express.json());


const feedbackRoute = require('./routes/feedback');
const nutritionRoute = require('./routes/nutrition');
const articleRoutes = require('./routes/article');
const vidRoute = require('./routes/video');
const libRoute = require('./routes/library');


app.use('/', articleRoutes);
app.use('/', feedbackRoute); 
app.use('/', nutritionRoute); 
app.use('/', vidRoute); 
app.use('/', libRoute); 

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});