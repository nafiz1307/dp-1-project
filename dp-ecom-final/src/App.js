import './App.css';
import Home from "./pages/Home"
import Header from './components/Header';
import Footer from './components/Footer';
import PagePreloader from './components/Page-preloader';
import Humberger from './components/Humberger';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <Fragment>
        <PagePreloader/>
        <Header/>
        <Route exact path='/' component={Home} />
      </Fragment>
    </Router>
  );
}

export default App;
