const prisma = require('../prisma');

const predictNutrition = async (req, res) => {
    try {
        const { name, weight } = req.query;
        const food = await prisma.nutrition.findFirst({
            where: { 
                name: name,
            }
        });

        if (!food) {
            return res.status(404).json({ error: "Data not found" });
        }
        
        const predictedNutrition = {
            calories: Math.round((food.calories / 100) * weight),
            proteins: parseFloat(((food.proteins / 100) * weight).toFixed(2)),
            fat: parseFloat(((food.fat / 100) * weight).toFixed(2)),
            carbohydrate: parseFloat(((food.carbohydrate / 100) * weight).toFixed(2)),
            name: food.name,
        };

        res.status(200).json({
            message: "Nutrition Prediction Successful",
            predictedNutrition
        });
    } catch (error) {
        console.error("Prediction Failed:", error);
        res.status(500).json({ error: "An error occurred on the server" });
    }
};

module.exports = { 
    predictNutrition
};