const prisma = require('../prisma');


const predictNutrition = async (req, res) => {
    try {
        const { name, weight } = req.body;

        const food = await prisma.nutrition.findFirst({
            where: { name },
        });

        if (!food) {
            return res.status(404).json({ error: "Data tidak ditemukan" });
        }

        const predictedNutrition = {
            calories: Math.round(food.calories * weight),
            proteins: parseFloat((food.proteins * weight).toFixed(2)),
            fat: parseFloat((food.fat * weight).toFixed(2)),
            carbohydrate: parseFloat((food.carbohydrate * weight).toFixed(2)),
            name: food.name,
        };

        res.status(200).json({
            message: "Nutrition prediction successful",
            predictedNutrition,
        });
    } catch (error) {
        console.error("Error predicting nutrition:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};


// const predictNutrition = async (req, res) => {
//     try {
//       const {name, weight} = req.query;
  
//       const nutrisi = await prisma.nutrition.findFirst({
//         where: { name, weight },
//     });
  
//       res.json(nutrisi);
//     } catch (error) {
//       console.error("Error searching articles:", error);
//       res.status(500).json({ error: "Internal server error" });
//     }
//   };

module.exports = predictNutrition;

