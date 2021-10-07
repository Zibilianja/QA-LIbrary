module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'Book',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 100],
        },
      },
      synopsis: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 500],
        },
      },
      number_of_pages: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true,
        },
      },
      rating: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true,
          isIn: [[1, 2, 3, 4, 5]],
        },
      },
      cover_image_url: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true
        }
      },
      published_date: {
        type: DataTypes.DATE,
        validate: {
            isDate: true
        }
      },
    },
    {
      paranoid: true,
    }
  );

  Book.associate = ({ Author }) => {
    Book.belongsTo(Author, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Book;
};
