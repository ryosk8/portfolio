import './Header.css';
import HeaderNavigation from './HeaderNavigation';
import Home from "./pages/Home"
import Work from "./pages/Work"
import Contact from './pages/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function Header() {
  return (
    <>
      <Router>
        <header>
          <div className="contain">
            <div className="header-left">
              <span className="logo">KOTAKI RYO</span>
            </div>
            <div className="header-right">
              <div className="navi">
                <div className="tab">
                  <Link to="/">
                    <HeaderNavigation link="Home" />
                  </Link>
                </div>
                <div className="tab">
                  <Link to="/Work">
                    <HeaderNavigation link ="Work"/>
                  </Link>
                </div>
                <div className="tab">
                  <Link to="/Contact">
                    <HeaderNavigation link ="Contact"/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className ="main">
          <Switch>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/Work">
              <Work />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>

    </>
  )
};