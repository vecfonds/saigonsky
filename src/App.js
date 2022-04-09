import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from './component/footer';
import Header from './component/header';
import Home from './component/home';
import Introduce from './component/introduce';


//learn
import CartProduct from './component/learn/learncartproduct';
import CardProfile from './component/learn/cardprofile';
import { hover } from '@testing-library/user-event/dist/hover';
import CardEffect from './component/learn/cardeffect';
import CardEffect2 from './component/learn/cardeffect2';

function App() {
  return (
      <div>
        <Header />
        <Home />
      </div>
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
