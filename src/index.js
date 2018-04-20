import React from 'react';
import ReactDOM from 'react-dom';
import VendorView from './components/VendorView';
import CategoryView from './components/CategoryView';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/Home';
import CATEGORY_DATA from './data/categories';

import VENDOR_DATA from './data/vendors';
import {Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory()
ReactDOM.render(
  // <VendorView
  //   voucherTitle="Example Voucher Title"
  //   vendorName="Example Vendor Name"
  //   vendorDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  //   voucherPrice="750"
  //   voucherValue="1000"
  //   voucherDiscount="250"
  //   />,
  //<CategoryView vendors={VENDOR_DATA} />,
  //<Home categories={CATEGORY_DATA} />,

    <Router history={history}>
      <div>
        <Route exact path="/" component={ Home } />
        <Route path="/categories/:categoryId" component={ CategoryView } />
        <Route path="/voucher/:vendorId" component={ VendorView } />
      </div>
    </Router>,
  document.getElementById('root')
);
registerServiceWorker();
