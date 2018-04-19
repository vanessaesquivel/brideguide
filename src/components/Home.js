import React, { Component } from 'react';

class Home extends Component {
  render(){
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
              this.props.categories.map((category, i) => {
                return (
                  <div className="col col-md-6 mb-4">
                    <div className="card">
                      <img className="card-img-top" src={category.img_url} alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">{category.name}</h5>

                        <a href="#" className="btn btn-primary">View More</a>
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
