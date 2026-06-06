import express from "express";
import prisma from "./lib/prisma.js";

const app = express();

app.get("/categories", async (req, res) => {
  const categories = await prisma.category.findMany();

  res.json(categories);
});

export { app }