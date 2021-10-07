const { Book, Author } = require('../models');
const { Op } = require('sequelize');

module.exports = {
  findAll: (req, res) => {
    Book.findAll({
        include: [Author],
        where: req.query,
    })
      .then((Book) => res.json(Book))
      .catch((err) => {
          console.log(err);
           res.status(500).json(err)})
  },
  findById: (req, res) => {
    Book.findByPk(req.params.id, {
      include: [Author],
    })
      .then((Book) => res.json(Book))
      .catch((err) => res.status(500).json(err));
  },
  search: (req, res) => {
    const { query } = req.params.query;
    Book.findAll(query, {
      include: [Author],
      where: {
        [Op.or]: [
          { title: { [Op.substring]: query } },
          { first_name: { [Op.substring]: query } },
          { last_name: { [Op.substring]: query } },
        ],
      },
    })
      .then((Book) => res.json(Book))
      .catch((err) => res.status(500).json(err));
  },
  create: (req, res) => {
    const {
        body: { author, ...book },
    } = req;
    const [first_name, last_name] = author.split(' ');
    Author.findOrCreate({
        where: {
            [Op.or]: [
            { first_name },
            { last_name }
            ],
        },
        defaults: {
            first_name,
            last_name,
        },
    })
      .then((author) => {
          console.log(author);
          Book.create({
              AuthorId: author[0].dataValues.id,
              ...book,
          })
          .then(() => res.end());
      })
      .catch((err) => {
          console.log(err);
          res.status(422).json(err)})
      
  },
  update: (req, res) => {
    Book.update(req.body, {
      where: { id: req.params.id },
    })
      .then(() => res.end())
      .catch((err) => res.status(422).json(err));
  },
  delete: (req, res) => {
    Book.destroy({
      where: { id: req.params.id },
    })
      .then(() => res.end())
      .catch((err) => res.status(500).json(err));
  },
};
