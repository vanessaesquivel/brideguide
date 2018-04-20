import {Router, Route} from 'react-router-dom';
import React from 'react';
import Home from './Home'
import CategoryView from './CategoryView'


class Container extends React.Component {
  render(){
    return(
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={CategoryView} />
        </div>
      </Router>
    )
  }
}


export default Container;
