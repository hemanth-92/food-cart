import React from 'react';

export default function RestaurantCard() {
  return (
      <div className="p-4 border-2 gap-2 w-auto m-3">
        <img
          className="w-16"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/esp0fhddgfgdss5hyhpi"
          alt="res-logo"
        />
        <h3>Mehfil</h3>
        <h3>Biryani chinese</h3>
        <h3>20 minutes</h3>
        <h3>4 stars</h3>
      </div>
  );
}