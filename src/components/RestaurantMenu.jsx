import { useState, useEffect } from "react";
import { Star, ChevronUp, AlertTriangle } from "lucide-react";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const response = await fetch("https://jsonifyyy.com/restros");
    const json = await response.json();
    //console.log(json);
    // console.log(menu);
    const resMenu = json?.data?.menu;
    setResInfo(resMenu);
    const { name, price, veg } = resMenu;
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-lg bg-white p-4 shadow-md">
      <h2 className="text-xl font-bold text-gray-900">
        Shah Ghouse Hotel & Restaurant
      </h2>
      <div className="mt-2 flex items-center text-sm text-gray-600">
        <span className="flex items-center font-semibold text-green-600">
          <Star />
          <span className="ml-1">4.3</span>
        </span>
        <span className="ml-2">(61K+ ratings)</span>
        <span className="mx-2">•</span>
        <span>₹350 for two</span>
      </div>
      <div className="mt-2 text-sm">
        <a href="#" className="font-medium text-orange-500 hover:underline">
          Biryani
        </a>
        ,
        <a href="#" className="font-medium text-orange-500 hover:underline">
          Chinese
        </a>
      </div>
      <div className="mt-2 text-sm text-gray-600">
        <div className="flex items-center">
          <span>Outlet</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-5 w-5 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span className="ml-1 text-gray-800">Banjara Hills</span>
        </div>
        <div className="mt-1">20-25 mins</div>
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
    </div>
  );
};
export default RestaurantMenu;
