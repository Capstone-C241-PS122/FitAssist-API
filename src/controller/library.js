const prisma = require("../prisma");

const createLibrary = async (req, res) => {
  try {
    const { type,id } = req.body;

    const postLibrary = await prisma.library.create({
      data: { type,id },
    });

    res.status(201).json({
      message: "Disimpan ke Library",
      postLibrary,
    });
  } catch (error) {
    console.error("Gagal menyimpan ke Library:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllLibraries = async (req, res) => {
  try {
    const libraries = await prisma.library.findMany();
    res.json(libraries);
  } catch (error) {
    console.error("Gagal menampilkan Library:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteLibrary = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.library.delete({ where: { id: parseInt(id) } });
    res.json({ message: "Dihapus" });
  } catch (error) {
    console.error("Gagal menghapus:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


module.exports = {
  createLibrary,
  getAllLibraries,
  deleteLibrary,
};
