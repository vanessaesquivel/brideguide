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
                        <img className="card-img-top"   src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162d5c806b6%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162d5c806b6%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.203125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap" />
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
