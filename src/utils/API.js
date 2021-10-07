import axios from 'axios';

export const getBooks = () => {
  return axios.get('http://localhost:3000/books');
};

export const getBook = (id) => {
  return axios.get(`http://localhost:3000/books/${id}`);
};

export const editBook = (id, book) => {
  return axios.put(`http://localhost:3000/books/${id}`, book, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const searchBooks = (query) => {
  return axios.get(`http://localhost:3000/books/${query}`);
};

export const deleteBook = (id) => {
  return axios.delete(`http://localhost:3000/books/${id}`);
};

export const addBook = (book) => {
  return axios.post('http://localhost:3000/books', book, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
