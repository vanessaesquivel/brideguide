import React, { Component } from 'react';


class VendorView extends Component {
  render() {
    const vendor = this.props.vendor;
    const voucher = vendor.voucher;

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="mb-4">{voucher.title}</h2>
            <h3 className="text-muted mb-4">
              {vendor.name}
              <span class="fa fa-star text-warning ml-3"></span>
              <span class="fa fa-star text-warning"></span>
              <span class="fa fa-star text-warning"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="row">
            </div>
            <div className="card mb-4">
              <div className="card-header">
                Description
              </div>
              <div className="card-body">
                <p className="card-text">{vendor.description}</p>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-header">
                Contact Info
              </div>
              <div className="card-body">
                <address>
                  <strong>{vendor.name}</strong><br/>
                {vendor.contact.address}<br/>
                <abbr title="Phone">P:</abbr> {vendor.contact.phone}<br/>
              <abbr title="Email">E:</abbr> {vendor.contact.email}
                </address>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Voucher Value</h6>
                  <small className="text-muted"></small>
                </div>
                <span className="text-muted">${voucher.value}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">BrideGuide discount</h6>
                  <small></small>
                </div>
                <span className="text-success">-${voucher.value - voucher.price}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
              <strong>${voucher.price}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between"><button type="button" className="btn btn-primary btn-lg btn-block">Purchase</button></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default VendorView;
