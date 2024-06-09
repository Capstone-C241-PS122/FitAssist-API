const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

prisma.$connect()
  .then(() => {
    console.log("Connected to the database successfully.");
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });

module.exports = prisma;