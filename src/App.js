import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from './Component/footer';
import Header from './Component/header';
import Home from './Component/home';
// import Introduce from './Component/introduce';
import ProductDetails from './Component/productDetails';
import Products from './Component/products';
import Breadcrumb from './Component/breadcrumb';


//learn
import CartProduct from './Component/learn/learncartproduct';
import CardProfile from './Component/learn/cardprofile';
import { hover } from '@testing-library/user-event/dist/hover';
import CardEffect from './Component/learn/cardeffect';
import CardEffect2 from './Component/learn/cardeffect2';

// import Slider from './Component/test';

import Slider from './Component/Introduce/Slider/Slider';
import Introduce from './Component/Introduce/Introduce/Introduce';
import Brands from './Component/Introduce/Brands/Brands';

function App() {
  return (
    <>
      <Header />
      <Slider />
      {/* <Breadcrumb />
      <Products /> */}
      {/* <Home /> */}
      <Introduce />
      <Brands />
      {/* <Breadcrumb />
      <ProductDetails /> */}
      <Footer />
    </>
  );
}

export default App;

{/* <Router>
    <div>
      <Header />
      <hr />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
      <Footer />
    </div>
  </Router> */}
