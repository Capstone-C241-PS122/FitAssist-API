const prisma = require("../prisma");

const createLibrary = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: "Video ID is required" });
    }

    const video = await prisma.video.findUnique({
      where: {
        id: id,
      },
    });

    if (!video) {
      return res.status(404).json({ error: "Video not found" });
    }

    const postLibraryVid = await prisma.library.create({
      data: {
        vidId: id,
        name_exercise: video.name_exercise,
        url_video: video.url_video,
        bodypart: video.bodypart,
        name_equipment: video.name_equipment,
      },
    });

    res.status(201).json({
      message: "Video disimpan ke Library",
      postLibraryVid,
    });
  } catch (error) {
    console.error("Gagal menyimpan ke Library:", error);
    res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
};

const getAllLibraries = async (req, res) => {
  try {
    const libraries = await prisma.library.findMany();
    res.json(libraries);
  } catch (error) {
    console.error("Gagal menampilkan Library:", error);
    res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
};

const deleteLibrary = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Library ID diperlukan" });
    }

    const library = await prisma.library.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!library) {
      return res.status(404).json({ error: "Library tidak ditemukan" });
    }

    await prisma.library.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.json({ message: "Library berhasil dihapus" });
  } catch (error) {
    console.error("Gagal menghapus:", error);
    res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
};

module.exports = {
  createLibrary,
  getAllLibraries,
  deleteLibrary,
};