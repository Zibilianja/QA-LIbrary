import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import '../styles/editbook.scss';
import { getBook, editBook } from '../utils/API';
import { FaStar } from 'react-icons/fa';
import Book1 from '../images/sorcerers_stone.jpeg';
import Book2 from '../images/chamberofsecrets.jpeg';
import Book3 from '../images/prisoner.jpeg';
import Book4 from '../images/goblet.jpeg';
import Book5 from '../images/phoenix.jpeg';
import Book6 from '../images/halfblood.jpeg';
import Book7 from '../images/deathlyhallows.jpeg';

const Editbook = () => {
  const coversObject = { Book1, Book2, Book3, Book4, Book5, Book6, Book7 };
  const [book, setBook] = useState({});
  const { title, author, image, published, synopsis, pages, rating } = book;
  const history = useHistory();
  const { id } = useParams();
  const [ratingStar, setRating] = useState(rating);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    getBook(id)
      .then(({ data: book }) => setBook(book))
      .catch((err) => console.log(err));
  }, [id]);

  const formSubmit = (e) => {
    e.preventDefault();

    if (!title || !author) {
      return alert('You must include both a title and author!');
    }

    setBook({
      title: '',
      author: '',
      image: 'default',
      published: 0 / 0 / 0,
      synopsis: '',
      pages: null,
      rating: null,
    });

    editBook(id, { title, author, synopsis, pages, published, rating, image })
      .then(() => history.push('/bookshelf'))
      .catch((err) => console.log(err));
  };

  const inputChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  return (
    <div className="edit__page">
      <main className="edit__main">
        <h1 className="edit__title">Edit Book</h1>
        <form className="edit__form" onSubmit={formSubmit}>
          <div className="form__left">
            <div className="form__wrappers">
              <label htmlFor="title" className="form__labels">
                Title
                <input
                  id="title"
                  type="text"
                  className="form__input form__title"
                  value={title}
                  name="title"
                  onChange={inputChange}
                />
              </label>
            </div>
            <div className="form__wrappers author__wrapper">
              <label htmlFor="author" className="form__labels">
                Author
                <input
                  id="author"
                  type="text"
                  className="form__input form__author"
                  value={author}
                  name="author"
                  onChange={inputChange}
                />
              </label>
            </div>
            <div className="form__wrappers synopsis__wrapper">
              <label htmlFor="synopsis" className="form__labels">
                Synopsis
                <textarea
                  id="synopsis"
                  type="text"
                  className="form__input form__synopsis"
                  name="synopsis"
                  value={synopsis}
                  onChange={inputChange}
                ></textarea>
              </label>
            </div>
            <div className="input__smaller">
              <div className="form__wrappers wrappers__sidebyside published__wrapper">
                <label htmlFor="publish" className="form__labels">
                  Published
                  <input
                    id="publish"
                    type="date"
                    className="form__input form__published"
                    value={published}
                    name="published"
                    onChange={inputChange}
                  />
                </label>
              </div>

              <div className="form__wrappers wrappers__sidebyside pages__wrapper">
                <label className="form__labels">
                  Pages
                  <input
                    type="number"
                    className="form__input form__pages"
                    value={pages}
                    name="pages"
                    onChange={inputChange}
                  />
                </label>
              </div>
            </div>
            <div className="form__wrappers rating__wrapper">
              <label htmlFor="rating" className="label__rating">
                Rating
                <div className="form__rating">
                  {[...Array(5)].map((star, i) => {
                    let ratingValue = i + 1;
                    return (
                      <label>
                        <input
                          id="rating"
                          type="radio"
                          className="rating__radio"
                          value={ratingValue}
                          display="hidden"
                          onClick={() => setRating(ratingValue)}
                          name="rating"
                          onChange={inputChange}
                        />
                        <FaStar
                          className="fa fa-star star__rating"
                          color={
                            ratingValue <= (hover || rating) ? 'gold' : 'grey'
                          }
                          onMouseEnter={() => setHover(ratingValue)}
                          onMouseLeave={() => setHover('')}
                        />
                      </label>
                    );
                  })}
                </div>
              </label>
            </div>
          </div>
          <div className="form__right">
            <div className="image__frame">
              <img src={coversObject[image]} className="book__cover" />
            </div>
            <button className="image__upload">Change Image</button>
          </div>
          <div className="edit__btnwrap">
            <button type="submit" className="edit__button button--dark">
              Submit
            </button>
            <Link to="/bookshelf" className="cancel__button--nav">
              <button className="edit__button cancel__button" type="reset">
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
};
export default Editbook;
