import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from '../src/pages/Index/Index.js';
import About from '../src/pages/About/About.js';
import Accessories from '../src/pages/Accessories/Accessories.js';
import Contact from '../src/pages/Contact/Contact.js';
import Blog from '../src/pages/Blog/Blog.js';
import Tea from '../src/pages/Tea/Tea.js';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/tea" component={Tea} />
          <Route path="/accessories" component={Accessories} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Index} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
