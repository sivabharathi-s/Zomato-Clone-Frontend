import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import "./App.css";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import RestaurantMenu from "./RestaurantMenu";
import Cart from "./Cart";
import Favorites from "./Favorites";
import Profile from "./Profile";
import React, { useState } from "react";
import Login from "./Login";
import SignIn from "./SignIn";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Zomato Clone
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/favorites">
                    Favorites
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    <FaUser />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    <FaShoppingCart />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">
                    Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Home setFavorites={setFavorites} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu/:id" element={<RestaurantMenu />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
            <Route path="/favorites" element={<Favorites favorites={favorites} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="text-center">
          <div className="container">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Zomato Clone. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
