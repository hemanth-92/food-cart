import { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([])

    useEffect(() => {
      fetchData();
    }, []);
  
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9821555&lng=80.1641598&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json()

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    // console.log(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    // )
  }

    if (listOfRestaurants.length === 0) {
      return <h1>Loading.......</h1>;
    }


  return (
    <div className="flex h-full w-full flex-col">
      <div className="p-3">
        <button
          className="border-24 border-solid text-2xl"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-2">
        <div className="grid w-full max-w-screen-lg grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body
