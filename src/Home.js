import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Home() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (restaurant) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.find(fav => fav.id === restaurant.id)) {
        return [...prevFavorites, restaurant];
      }
      return prevFavorites;
    });
  };

  return (
    <section className="restaurant-list py-5">
      <div className="container">
        <h2 className="text-center mb-4">Popular Restaurants</h2>
        <div className="row">
          {/* Restaurant Card */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img 
                src="https://i0.wp.com/imageio.forbes.com/specials-images/imageserve/62fe3a28c22bf8624fce7c7a/0x0.jpg?format=jpg&width=1200" 
                className="card-img-top" 
                alt="Restaurant 1"
              />
              <div className="card-body">
                <h5 className="card-title">Italian</h5>
                <p className="card-text text-muted">
                  4.5 ★
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/menu/1" className="btn btn-primary btn-sm">
                    View Menu
                  </Link>
                  <button className="btn btn-outline-danger btn-sm" onClick={() => addToFavorites({ id: 1, name: 'Restaurant Name 1' })}>
                    <FaHeart />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" 
                className="card-img-top" 
                alt="Restaurant 2"
              />
              <div className="card-body">
                <h5 className="card-title">Chinese</h5>
                <p className="card-text text-muted">
                 4.2 ★
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/menu/2" className="btn btn-primary btn-sm">
                    View Menu
                  </Link>
                  <button className="btn btn-outline-danger btn-sm" onClick={() => addToFavorites({ id: 2, name: 'Restaurant Name 2' })}>
                    <FaHeart />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img 
                src="https://www.holidify.com/images/cmsuploads/compressed/Indus-Restaurant-2_20180907160106.jpg" 
                className="card-img-top" 
                alt="Restaurant 3"
              />
              <div className="card-body">
                <h5 className="card-title">Indian</h5>
                <p className="card-text text-muted">
                  4.7 ★
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/menu/3" className="btn btn-primary btn-sm">
                    View Menu
                  </Link>
                  <button className="btn btn-outline-danger btn-sm" onClick={() => addToFavorites({ id: 3, name: 'Restaurant Name 3' })}>
                    <FaHeart />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" 
                className="card-img-top" 
                alt="Restaurant 4"
              />
              <div className="card-body">
                <h5 className="card-title">Mexican</h5>
                <p className="card-text text-muted">
                   4.3 ★
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/menu/4" className="btn btn-primary btn-sm">
                    View Menu
                  </Link>
                  <button className="btn btn-outline-danger btn-sm" onClick={() => addToFavorites({ id: 4, name: 'Restaurant Name 4' })}>
                    <FaHeart />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2" 
                className="card-img-top" 
                alt="Restaurant 5"
              />
              <div className="card-body">
                <h5 className="card-title">Japanese</h5>
                <p className="card-text text-muted">
                   4.6 ★
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/menu/5" className="btn btn-primary btn-sm">
                    View Menu
                  </Link>
                  <button className="btn btn-outline-danger btn-sm" onClick={() => addToFavorites({ id: 5, name: 'Restaurant Name 5' })}>
                    <FaHeart />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img 
                src="https://th.bing.com/th/id/R.a7c44ebdd628696a5c860172b598f1e8?rik=w7dL641p1rdSUQ&riu=http%3a%2f%2fwww.luxxu.net%2fblog%2fwp-content%2fuploads%2f2018%2f01%2fThe-Best-Luxury-Restaurants-in-Paris-02.jpg&ehk=FOSbc7d5X6y7GJIWDO1HURlDGt7QfjzPK%2b%2bwNKhEhSQ%3d&risl=&pid=ImgRaw&r=0" 
                className="card-img-top" 
                alt="Restaurant 6"
              />
              <div className="card-body">
                <h5 className="card-title">French</h5>
                <p className="card-text text-muted">
                   4.8 ★
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/menu/6" className="btn btn-primary btn-sm">
                    View Menu
                  </Link>
                  <button className="btn btn-outline-danger btn-sm" onClick={() => addToFavorites({ id: 6, name: 'Restaurant Name 6' })}>
                    <FaHeart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;