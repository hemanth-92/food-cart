import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonifyyy.com/restros", {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      //console.log(json);

      const restaurants = json?.data;
      //console.log(restaurants);

      setListOfRestaurants(restaurants);
      setFilteredRes(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Display loading while data is being fetched
  if (!listOfRestaurants || listOfRestaurants.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex gap-3 p-3">
        <button
          className="border-24 border-solid text-2xl"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Top Rated Restaurant
        </button>
        <div className="flex gap-4">
          <input
            className="border-2 bg-inherit"
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRes = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase()),
              );
              setFilteredRes(filteredRes);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-2">
        <div className="grid w-full max-w-screen-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {filteredRes.map((restaurant) => (
            <RestaurantCard key={restaurant._id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
