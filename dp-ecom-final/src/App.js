import './App.css';
import Home from "./pages/Home"
import Header from './components/Header';
import Footer from './components/Footer';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <Fragment>
        <Route exact path='/' component={Home} />
      </Fragment>
    </Router>
  );
}

export default App;
