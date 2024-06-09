const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());


const feedbackRoute = require('./routes/feedback');
const nutritionPredictionRoute = require('./routes/nutrition');
const articleRoutes = require('./routes/article');
const vidRoute = require('./routes/video');


app.use('/', articleRoutes);
app.use('/', feedbackRoute);
app.use('/', nutritionPredictionRoute);
app.use('/', vidRoute);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});