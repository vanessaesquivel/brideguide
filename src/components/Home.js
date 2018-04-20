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
          <blockquote class="blockquote text-center">
          <h4 className="mt-4">A bride&#39;s guide to planning a remote wedding.</h4>
          <h5 className="text-center text-muted mb-4">All the vendors you need in one place to plan your wedding</h5>
          </blockquote>
          <div className="row">
            {
              categories.map((category, i) => {
                return (
                  <div className="col col-md-6 mb-4">
                    <div className="card text-center">
                      <img className="card-img-top" src={category.img_url} alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">{category.name}</h5>

                        <a href={`/categories/${category.id}`} className="btn btn-info">View More</a>
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
