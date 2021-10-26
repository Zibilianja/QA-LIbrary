import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/bookshelf.scss';
import SearchImg from '../images/magnify.png';
import Book1 from '../images/sorcerers_stone.jpeg';
import Book2 from '../images/chamberofsecrets.jpeg';
import Book3 from '../images/prisoner.jpeg';
import Book4 from '../images/goblet.jpeg';
import Book5 from '../images/phoenix.jpeg';
import Book6 from '../images/halfblood.jpeg';
import Book7 from '../images/deathlyhallows.jpeg';
import { getBooks } from '../utils/API.js';

const Bookshelf = () => {
  const [books, setBooks] = useState([]);
  const [newQuery, setNewQuery] = useState('');
  const history = useHistory();

  useEffect(() => {
    getBooks()
      .then(({ data: books }) => setBooks(books))
      .catch((err) => console.log(err));
  }, []);

  const formSubmit = (e) => {
    e.preventDefault();

    if (!newQuery) {
      return alert('Must provide an author or title!');
    }

    getBooks()
      .then(() => history.push('/filtered/' + newQuery))
      .catch((err) => console.log(err));
  };

  const inputChange = (e) => {
    const { value } = e.target;
    setNewQuery(value);
  };

  const coversObject = { Book1, Book2, Book3, Book4, Book5, Book6, Book7 };

  return (
    <div className="page__bookshelf">
      <main className="main__bookshelf">
        <div className="main__searchwrapper">
          <form onSubmit={formSubmit} className="main__form">
            <input
              type="text"
              placeholder="Search by Title/Author"
              className="main__search"
              onChange={inputChange}
            />
            <button type="submit" className="search__button">
              <img
                src={SearchImg}
                alt="Magnifying Glass"
                className="main__searchimg"
              />
            </button>
          </form>
        </div>
        <h2 className="main__title">Release the Kraken of Knowledge!</h2>
        <section className="main__gridcontainer">
          {books.map(({ id, title, image, author }, i) => (
            <div className={`grid__items item__${i}`}>
              <Link to={'/bookdetails/' + id} className="book__link">
                <img className="grid__bookcover" src={coversObject[image]} />
                <div className="grid__title">{title}</div>
                <div className="grid__author">{author}</div>
              </Link>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};
export default Bookshelf;
