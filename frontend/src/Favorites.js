import React from 'react';

function Favorites({ favorites }) {
  return (
    <section className="favorites-list py-5">
      <div className="container">
        <h2 className="text-center mb-4">Favorite Restaurants</h2>
        <div className="row">
          {favorites.map(fav => (
            <div className="col-md-4 mb-4" key={fav.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{fav.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Favorites;
