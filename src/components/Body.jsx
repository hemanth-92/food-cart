import { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([])
  const [search, setSearch] = useState('')
  const [filteredRes, setFilteredRes] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.413339&lng=78.4603535&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json()

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    )
    setFilteredRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    )
    // console.log(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants,
    // )
  }
  // console.log(listOfRestaurants.length)
  // console.log(filteredRes.length);


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
        <div>
          <input
            className="border-2 bg-inherit"
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            className="gap-2"
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
          {filteredRes.map((restaurants) => (
            <RestaurantCard key={restaurants.info.id} resData={restaurants} />
          ))}
        </div>
      </div> 
    </div>
  );
}

export default Body
