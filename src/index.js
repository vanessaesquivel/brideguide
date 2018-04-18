import React from 'react';
import ReactDOM from 'react-dom';
import VendorView from './components/VendorView';
import CategoryView from './components/CategoryView';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/Home';

ReactDOM.render(
  // <VendorView
  //   voucherTitle="Example Voucher Title"
  //   vendorName="Example Vendor Name"
  //   vendorDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  //   voucherPrice="750"
  //   voucherValue="1000"
  //   voucherDiscount="250"
  //   />,
  //<CategoryView vendors={[{ name:"Flowers1", short_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" }]} />,
<Home categories={"Flowers", "Music", "Venues"}/>,
  document.getElementById('root')
);
registerServiceWorker();
