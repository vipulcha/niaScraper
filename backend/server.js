const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const scraper = require('tech-news-scraper');

const app=express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get('/', async (req,res) => {
    const news = await scraper.allNews();
    res.json(news);
})

app.listen(PORT, () => {
    console.log("Server is running!");
})



