const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());


const feedbackRoute = require('./routes/feedback');
const nutritionPredictionRoute = require('./routes/nutrition');
const articleRoutes = require('./routes/article');
const vidRoute = require('./routes/video');
const libRoute = require('./routes/library');


app.use('/', articleRoutes);
app.use('/', feedbackRoute); //oke
app.use('/', nutritionPredictionRoute); //oke tp ganti ke get
app.use('/', vidRoute); //oke
app.use('/', libRoute); //oke


app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});