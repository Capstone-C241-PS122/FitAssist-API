const prisma = require('../prisma');

const getArticleByBodyPart = async (req, res) => {
  const bodypart = req.query.bodypart;
  if (!bodypart) {
    return res.status(400).json({
      error: true,
      message: "Parameter 'bodypart' diperlukan",
    });
  }

  try {
    const articles = await prisma.article.findMany({
      where: {
        BodyPart: {
          contains: bodypart
        },
      },
    });

    if (articles.length === 0) {
      return res.status(404).json({
        error: true,
        message: "Data tidak ditemukan",
      });
    }

    return res.json({
      error: false,
      message: "Berikut hasil pencarian Anda",
      list_article: articles.map(article => ({
        id: article.id,
        BodyPart: article.BodyPart,
      })),
    });
  } catch (error) {
    console.error("Error searching articles:", error);
    return res.status(500).json({
      error: true,
      message: "Terjadi kesalahan pada server",
    });
  }
};

const getAllArticles = async (req, res) => {
  try {
    const articles = await prisma.article.findMany();
    return res.json({
      error: false,
      message: "Berikut semua artikel",
      list_article: articles.map(article => ({
        id: article.id,
        Description: article.Description,
        Title: article.Title,
        BodyPart: article.BodyPart,
        Type: article.Type,
        Equipment: article.Equipment,
        Level: article.Level,
      })),
    });
  } catch (error) {
    console.error("Error fetching all articles:", error);
    return res.status(500).json({
      error: true,
      message: "Terjadi kesalahan pada server",
    });
  }
};

module.exports = {
  getArticleByBodyPart,
  getAllArticles,
};