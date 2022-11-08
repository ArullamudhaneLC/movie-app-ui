import { Router, Route, NavLink } from 'react-router-dom';
import React, {Component} from 'react';

class Nav extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav">
              <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/movies">nnn</NavLink></li>
              <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/movies/new">Add Movie</NavLink></li>
              <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/movies/book">Booking</NavLink></li>
            </ul>
          </nav>
        )
    }
}
export default Nav;