import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Bookshelf from './pages/Bookshelf';
import Header from './components/Header';
import Home from './pages/Home';
import Addbook from './pages/Addbook';
import Bookdetails from './pages/Bookdetails';
import Editbook from './pages/Editbook';
import Footer from './components/Footer';
import FilteredBooks from './pages/FilteredBooks';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/bookshelf" component={Bookshelf} />
        <Route path="/addbook" component={Addbook} />
        <Route path="/editbook/:id" component={Editbook} />
        <Route path="/bookdetails/:id" component={Bookdetails} />
        <Route path="/filtered/:query" component={FilteredBooks} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
