import CrawledPage from '../models/CrawledPageModel.js';

export const crawl = (req, res) => {
  const {url} = req.body;
  return res.json({url});
};

//load history using mongoose -> https://mongoosejs.com/
export const getHistory = (req, res) => {
  CrawledPage.find({}, (error, pages) => {
    if (error) {
      return res.status(400).json(error);
    }

    return res.send(pages);
  });
};

