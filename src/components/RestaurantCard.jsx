import { Star, Timer } from "lucide-react";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log("This is res ", resData);

  const { imageUrl, name, avgRating, cuisines, veg, deliveryTime } =
    resData?.info || {};

  return (
    <div className="flex h-96 w-64 flex-col rounded-lg bg-white p-4 shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <img
        className="h-40 w-full rounded-t-lg object-cover"
        alt="restaurant-logo"
        src={imageUrl}
      />
      <div className="flex flex-grow flex-col p-4">
        <h3 className="mb-1 text-lg font-semibold">{name}</h3>
        <p className="mb-2 text-sm text-gray-600">{cuisines.join(", ")}</p>
        <div className="mb-2 flex items-center justify-between">
          <span className="flex gap-2">
            <Star style={{ color: "#FFFF00" }} />
            {avgRating}
          </span>
          <span className="text-sm text-gray-800">{veg}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Timer />
          <span>{deliveryTime} minutes</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
