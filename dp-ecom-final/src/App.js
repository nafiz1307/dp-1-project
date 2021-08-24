// import './App.css';
import Home from "./pages/Home"
import Header from './components/Header';
import Footer from './components/Footer';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <Fragment>
        <Header/>
        <Route exact path='/' component={Home} />
        <Footer/>
      </Fragment>
    </Router>
  );
}

export default App;
