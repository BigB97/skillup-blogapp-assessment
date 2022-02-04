const News = require("../models/news.scheme");

const newCnt = {
  create: async (req, res) => {
    try {
      const news = await new News({
        title: req.body.title,
        description: req.body.description,
        // isValid: req.body.isValid,
      }).save()
      if(!news) throw new Error("News not saved properly")
      res.status(201).send(news)
    } catch (error) {
        res.status(400).send(error.message);
    }
  },
};

module.exports = newCnt;
