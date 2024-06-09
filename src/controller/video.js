const prisma = require('../prisma');


const getAllVideos = async (req, res) => {
    try {
      const videos = await prisma.video.findMany();
      res.json(videos);
    } catch (error) {
      console.error("Gagal menampilkan Video:", error);
      res.status(500).json({ error: "Internal server error" });
    }
};

const getVideoById = async (req, res) => {
    try {
      const { id } = req.params;
      const vid = await prisma.video.findUnique({
        where: { id: parseInt(id) },
      });
      if (!vid) {
        return res.status(404).json({ error: "Video tidak ditemukan" });
      }
      res.json(vid);
    } catch (error) {
      console.error("Gagal menampilkan video:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

//predict to get video
const getVideoByImg = async (req, res) => {
  try {
    // let { label } = req.query;
    // let vid = [];
    const label = req.query;

    const vid = await prisma.video.findFirst({
      where: { label },
  });

    //label = label ? label.toLowerCase() : null;

    // if (label) {
    //   vid = await prisma.video.findMany({
    //     where: {
    //       label: { contains: label },
    //     },
    //   });
    // } else {
    //   return res
    //     .status(400)
    //     .json({ error: "Title or tags query parameter is required" });
    // }

    res.json(vid);
  } catch (error) {
    console.error("Error searching articles:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};



module.exports = {
  getAllVideos, getVideoById, getVideoByImg
};