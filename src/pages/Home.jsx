import { useHistory, NavLink } from 'react-router-dom';
import React from 'react';
import '../styles/index.scss';

const Home = () => {
  // # Gives us access to the history object, which can be used to redirect from one component to another
  const history = useHistory();

  return (
    <div className="page">
      <main className="main">
        <div className="main__div">
          <section className="main__titlecontainer">
            <div className="main__titleheadings">
              <h1 className=" main__titleheading1">Books.</h1>
              <h2 className=" main__titleheading2">Read em & weep</h2>
            </div>
          </section>
          <section className="main__descriptions">
            <h2 className="description__heading">Welcome to the Library</h2>
            <p className="main_paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <button className="description__button button--dark">
              <NavLink to="/bookshelf">See Books</NavLink>
            </button>
            <p className="main_paragraph">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </p>
            <button className="description__button button--dark">
              <NavLink to="/addbook">Add Book</NavLink>
            </button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
