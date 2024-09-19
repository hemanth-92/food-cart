import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { MenuItem } from "./MenuItem";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    // Fetch data whenever resId changes
    if (resId) {
      fetchMenu(resId);
    }
  }, [resId]);

  const fetchMenu = async (id) => {
    try {
      const response = await fetch(`https://jsonifyyy.com/restros/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch menu");
      }
      const json = await response.json();
      const resMenu = json?.data[0]?.menu;

      // Check if the menu exists
      if (resMenu) {
        setResInfo(resMenu);
      } else {
        setError("No menu available for this restaurant.");
      }
    } catch (error) {
      console.error("Error fetching menu:", error);
      setError(error.message);
    }
  };

  // If there's an error, display an error message
  if (error) {
    return <div>Error: {error}</div>;
  }

  // If resInfo is null, return a loading state
  if (!resInfo) {
    return <Shimmer />;
  }

  const { name, price, veg, category, imageUrl, description } = resInfo;

  return (
    <div className="mx-auto w-full max-w-md rounded-lg bg-white p-4 shadow-md">
      <h2 className="text-xl font-bold text-gray-900">{name}</h2>
      <div className="mt-2 flex items-center text-sm text-gray-600">
        <span className="flex items-center font-semibold text-green-600">
          <Star />
          <span className="ml-1">4.3</span>
        </span>
        <span className="ml-2">(61K+ ratings)</span>
        <span className="mx-2">•</span>
        <span>{price}</span>
      </div>
      <div className="mt-2 text-sm">
        <a href="#" className="font-medium text-orange-500 hover:underline">
          {category || "Category"}
        </a>
      </div>
      <div className="mt-2 text-sm text-gray-600">
        <div className="flex items-center">
          <span>{veg ? "Veg" : "Non-Veg"}</span>
        </div>
        <div className="mt-1">{description || "No description available."}</div>
      </div>
      <div className="mt-4 flex items-center justify-between border-t pt-4 text-sm text-gray-600">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.121 17.804a10.97 10.97 0 011.992-.341 9.955 9.955 0 014.887 1.272 9.975 9.975 0 004.886-1.272 10.97 10.97 0 011.992.341m-4.425-2.641a9.975 9.975 0 00-4.887-1.272 9.955 9.955 0 00-4.887 1.272m4.887-7.635a9.975 9.975 0 014.887 1.272 9.975 9.975 0 014.887-1.272m-9.775-3.478A10.978 10.978 0 013.05 12.563m16.9-8.697a10.978 10.978 0 010 13.698M12 6V6.01M12 12v.01M12 18v.01"
            />
          </svg>
          <span className="ml-2">2.7 kms</span>
        </div>
        <div>₹39 Delivery fee will apply</div>
      </div>
      <div>
        {/* Dynamically render menu items here */}
        {resInfo.items?.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
