const prisma = require('../prisma');

const getAllVideos = async (req, res) => {
    try {
      const videos = await prisma.video.findMany();
      res.json(videos);
    } catch (error) {
      console.error("Failed to display video:", error);
      res.status(500).json({ error: "An error occurred on the server" });
    }
};

const getVideoById = async (req, res) => {
    try {
      const { id } = req.params;
      const vid = await prisma.video.findUnique({
        where: { id: parseInt(id) },
      });
      if (!vid) {
        return res.status(404).json({ error: "Video not found" });
      }
      res.json(vid);
    } catch (error) {
      console.error("Failed to display video:", error);
      res.status(500).json({ error: "An error occurred on the server" });
    }
  };

  const getVideoByImg = async (req, res) => {
    try {
        const { label } = req.body;

        if (!label) {
            return res.status(400).json({ error: "Label is required" });
        }

        const vid = await prisma.video.findMany({
            where: { 
                label: {
                    contains: label,
                },
            },
        });

        if (vid.length === 0) {
            return res.status(404).json({ error: "Video not found" });
        }

        res.json(vid);
    } catch (error) {
        console.error("Error searching video:", error);
        res.status(500).json({ error: "An error occurred on the server" });
    }
};
  
module.exports = {
  getAllVideos, 
  getVideoById, 
  getVideoByImg,
};