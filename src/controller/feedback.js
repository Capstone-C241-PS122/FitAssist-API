const prisma = require('../prisma');
console.log(prisma);

const createFeedback = async (req, res) => {
    try {
        // Logika untuk menangani permintaan POST
        const { description} = req.body;

        const postFeedback = await prisma.feedback.create({
            data: {description},
        });

        res.status(201).json({
            message: "Feedback terkirim",
            postFeedback,
        });
    } catch (error) {
        console.error("Gagal mengirim feedback:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    createFeedback,
};
