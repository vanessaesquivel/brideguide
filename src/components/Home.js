import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import CategoryView from './CategoryView';
import CATEGORY_DATA from '../data/categories';

class Home extends Component {
  render(){
    const categories = CATEGORY_DATA;

    return(

      <div className="container-fluid">
          <div className="row">
            <div className="col">
              <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/cover.png`} />
            </div>
          </div>
          <div className="row text-center">
          <p className="text-center">A bride&#39;s guide to planning a remote wedding.</p>
            <p className="text-muted">All the vendors you need in one place to plan your wedding</p>
          </div>
          <div className="row">
            {
              categories.map((category, i) => {
                return (
                  <div className="col col-md-6 mb-4">
                    <div className="card">
                      <img className="card-img-top" src={category.img_url} alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">{category.name}</h5>

                        <a href={`/categories/${category.id}`} className="btn btn-primary">View More</a>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>

      </div>

    )
  }
}


export default Home;
