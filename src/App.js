import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from './component/footer';
import Header from './component/header';
import Home from './component/home';
import Introduce from './component/introduce';
import ProductDetails from './component/productDetails';
import Products from './component/products';
import Breadcrumb from './component/breadcrumb';


//learn
import CartProduct from './component/learn/learncartproduct';
import CardProfile from './component/learn/cardprofile';
import { hover } from '@testing-library/user-event/dist/hover';
import CardEffect from './component/learn/cardeffect';
import CardEffect2 from './component/learn/cardeffect2';

import Slider from './component/test';

function App() {
  return (
    <>
      <Header />
      {/* <Breadcrumb />
      <Products /> */}
      <Home />
      <Introduce />
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
