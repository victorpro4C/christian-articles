const Article = require("./../models/articleModel");

exports.getAllArticles = async (req, res, next) => {
  try {
    const articles = await Article.find();
    res.status(200).json({
      status: "success",
      data: {
        articles
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      data: {
        err
      }
    });
  }

}

exports.getArticle = async (req, res, next) => {
  const article = await Article.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: {
      article
    }
  });
}

exports.createArticle = async (req, res, next) => {
  try {
    const newArticle = await Article.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        newArticle
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      data: {
        err
      }
    });
  }
}

exports.updateArticle = (req, res, next) => {
  res.json({
    data: "Update an article"
  });
}
exports.deleteArticle = (req, res, next) => {
  res.json({
    data: "Delete an article"
  });
}