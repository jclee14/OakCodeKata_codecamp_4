var db = require('../models');
const { Op } = require('sequelize')

module.exports.homepage = async function(req, res) {
  try {
    let newsResult = await db.news.findAll();
    let imageResult = await db.image.findAll();

    /* Top Story */
    const topStoryNews = await db.news.findOne({ where: { id: 2 }, include: [{ model: db.tag }] });
    const topStoryImg = await db.image.findOne({ where: { newsId: 2 } });
    const topStoryRelatedNews = await db.news.findOne({ where: { id: 19 }, include: [{ model: db.tag }] });
    const topStoryRelatedImg = await db.image.findOne({ where: { newsId: 19 } });

    /* Featured Story */
    const featuredStoryNews = await db.news.findAll({ 
      where: { 
        [Op.or] : [ { id: 1 }, { id: 3 }, { id: 18 } ]
      },
      include: [{ model: db.tag }]
    });
    const featuredStoryImg = await db.image.findAll({ where: { [Op.or] : [ { newsId: 1 }, { newsId: 3 }, { newsId: 18 } ]}});

    /* Culture&Travel News */
    const cultureNews = await db.news.findAll({ 
      where: { 
        [Op.or] : [ { id: 4 }, { id: 5 }, { id: 6 } ]
      },
      include: [{ model: db.tag }]
    });
    const cultureImg = await db.image.findAll({ where: { [Op.or] : [ { newsId: 4 }, { newsId: 5 }, { newsId: 6 } ]}});

    /* Lastest News */
    const lastestNews = await db.news.findAll({ 
      where: { 
        [Op.or] : [ { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 } ]
      },
      include: [{ model: db.tag }]
    });
    const lastestImg = await db.image.findAll({ 
      where: { 
        [Op.or] : [ { newsId: 7 }, { newsId: 8 }, { newsId: 9 }, { newsId: 10 }, { newsId: 11 } ]
      }
    });

    /* Debate Section */
    const debateNews = await db.news.findAll({ 
      where: { 
        [Op.or] : [ { id: 12 }, { id: 13 } ]
      },
      include: [{ model: db.tag }, {model: db.author }]
    });
    const debateImg = await db.image.findAll({ 
      where: { 
        [Op.or] : [ { newsId: 12 }, { newsId: 13 } ]
      }
    });

    /* Opinion Section */
    const opinionNews = await db.news.findAll({ 
      where: { 
        [Op.or] : [ { id: 14 }, { id: 15 },{ id: 16 }, { id: 17 } ]
      },
      include: [{ model: db.tag }, {model: db.author }]
    });
    const opinionImg = await db.image.findAll({ 
      where: { 
        [Op.or] : [ { newsId: 14 }, { newsId: 15 },{ newsId: 16 }, { newsId: 17 } ]
      }
    });

    data = {
      header: "Newsweek - News, Analysis, Politics, Business, Technology",
      news: newsResult,
      image: imageResult,
      topStory: {
        news: topStoryNews,
        image: topStoryImg,
        relatedNews: topStoryRelatedNews,
        relatedImage: topStoryRelatedImg
      },
      featuredStory: {
        news: featuredStoryNews,
        image: featuredStoryImg
      },
      cultureColumn: {
        news: cultureNews,
        image: cultureImg
      },
      lastestNews: {
        news: lastestNews,
        image: lastestImg
      },
      debateNews: {
        news: debateNews,
        image: debateImg
      },
      opinionNews: {
        news: opinionNews,
        image: opinionImg
      }
    }
    res.render('index', data);
  }
  catch (err) {
    console.log(err);
    res.status(400).json();
  }
}

module.exports.newspage = async function(req, res) {
  try {
    const id = req.params.id;

    const news = await db.news.findOne({ where: { id: id }, include: [{ model: db.tag }, {model: db.author }] });
    const image = await db.image.findOne({ where: { newsId: id } });

        /* Lastest News */
        const lastestNews = await db.news.findAll({ 
          where: { 
            [Op.or] : [ { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 } ]
          },
          include: [{ model: db.tag }]
        });
        const lastestImg = await db.image.findAll({ 
          where: { 
            [Op.or] : [ { newsId: 7 }, { newsId: 8 }, { newsId: 9 }, { newsId: 10 }, { newsId: 11 } ]
          }
        });
    
        /* Debate Section */
        const debateNews = await db.news.findAll({ 
          where: { 
            [Op.or] : [ { id: 12 }, { id: 13 } ]
          },
          include: [{ model: db.tag }, {model: db.author }]
        });
        const debateImg = await db.image.findAll({ 
          where: { 
            [Op.or] : [ { newsId: 12 }, { newsId: 13 } ]
          }
        });
    
        /* Opinion Section */
        const opinionNews = await db.news.findAll({ 
          where: { 
            [Op.or] : [ { id: 14 }, { id: 15 },{ id: 16 }, { id: 17 } ]
          },
          include: [{ model: db.tag }, {model: db.author }]
        });
        const opinionImg = await db.image.findAll({ 
          where: { 
            [Op.or] : [ { newsId: 14 }, { newsId: 15 },{ newsId: 16 }, { newsId: 17 } ]
          }
        });

    data = {
      header: news.topic,
      id: id,
      news: news,
      image: image,
      lastestNews: {
        news: lastestNews,
        image: lastestImg
      },
      debateNews: {
        news: debateNews,
        image: debateImg
      },
      opinionNews: {
        news: opinionNews,
        image: opinionImg
      }
    }
    res.render('newspage', data);
  }
  catch (err) {
    console.log(err);
    res.status(400).json();
  }
}