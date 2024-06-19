const prisma = require('../prisma');
console.log(prisma);

const createFeedback = async (req, res) => {
    try {
        const { description} = req.body;

        const postFeedback = await prisma.feedback.create({
            data: {description},
        });

        res.status(201).json({
            message: "Feedback sent",
            postFeedback,
        });
    } catch (error) {
        console.error("Failed to send feedback", error);
        res.status(500).json({ error: "An error occurred on the server" });
    }
};

module.exports = {
    createFeedback,
};