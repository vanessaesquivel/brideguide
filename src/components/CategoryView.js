import React, { Component } from 'react';
import VENDOR_DATA from '../data/vendors';
import CATEGORY_DATA from '../data/categories';
import classNames from 'classnames';

class CategoryView extends Component {

  render(){
    const categoryId = this.props.match.params.categoryId;
    const categories = CATEGORY_DATA;
    const vendors = VENDOR_DATA.filter((vendor) => vendor.category_id == categoryId);

    return(
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="list-group">
              <div className="list-group-item list-group-item-info"><h5>Categories</h5></div>
              {
                categories.map((category, i) => {
                  const classes = classNames({
                    "list-group-item": true,
                    "list-group-item-action": true,
                    "list-group-item-secondary": category.id == categoryId
                  });

                  return (
                    <a className={classes} href={`/categories/${category.id}`}>{category.name}</a>
                  )
                })
              }
            </div>
          </div>

          <div className="col-md-9">
            <div className="row">
              {
                vendors.map((vendor, i) => {
                  return (
                    <div className="card col-md-5 mb-4 mr-4">
                      <a href={`/voucher/${vendor.id}`}>
                        <img className="card-img-top"   src={`${process.env.PUBLIC_URL}/images/${vendor.image_url}`} alt="Card image cap" />
                      </a>
                      <div className="card-body">
                          <h5 className="card-title">{vendor.name}</h5>
                            <p className="card-text">{vendor.short_description}</p>
                          <a href={`/voucher/${vendor.id}`} className="btn btn-info">See voucher</a>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CategoryView;
