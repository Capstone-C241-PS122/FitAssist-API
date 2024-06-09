const prisma = require('../prisma');

const getArticle = async (req, res) => {
  const title = req.query.title;
  if (!title) {
    return res.status(400).json({
      error: true,
      message: "Parameter 'title' diperlukan",
    });
  }

  try {
    const articles = await prisma.article.findMany({
      where: {
        Title: {
          contains: title
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
        Title: article.Title,
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

module.exports = {
  getArticle,
};