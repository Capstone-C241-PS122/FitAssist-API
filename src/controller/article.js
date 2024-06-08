const prisma = require("../prisma");

const getArticle = async (req, res) => {
    try {
      const articles = await prisma.article.findMany();
      res.json(articles);
    } catch (error) {
      console.error("Error fetching articles:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

  const getArticleById = async (req, res) => {
    try {
      const { id } = req.params;
      const article = await prisma.article.findUnique({
        where: { id: parseInt(id) },
      });
      if (!article) {
        return res.status(404).json({ error: "Article not found" });
      }
      res.json(article);
    } catch (error) {
      console.error("Error fetching article:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

  const searchArticle = async (req, res) => {
    try {
      let { title, tags } = req.query;
      let articles = [];
  
      title = title ? title.toLowerCase() : null;
      tags = tags ? tags.toLowerCase() : null;
  
      if (title) {
        articles = await prisma.article.findMany({
          where: {
            title: { contains: title },
          },
        });
      } else if (tags) {
        articles = await prisma.article.findMany({
          where: {
            tags: { contains: tags },
          },
        });
      } else {
        return res
          .status(400)
          .json({ error: "Title or tags query parameter is required" });
      }
  
      res.json(articles);
    } catch (error) {
      console.error("Error searching articles:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

module.exports = {
    getArticle,
    getArticleById,
    searchArticle
};
