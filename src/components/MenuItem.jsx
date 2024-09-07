import { ChevronUp, AlertTriangle } from "lucide-react";

const MenuItem = () => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Recommended (3)</h2>
        <ChevronUp className="h-5 w-5 text-gray-500" />
      </div>

      <div className="flex items-start justify-between">
        <div className="flex-grow">
          <div className="mb-1 flex items-center">
            <AlertTriangle className="mr-2 h-4 w-4 text-red-500" />
            <h3 className="text-lg font-medium">Grill Chicken</h3>
          </div>
          <p className="mb-1 text-lg font-semibold">₹250</p>
          <div className="mb-1 flex items-center">
            <span className="mr-1 text-green-500">★ 3.7</span>
            <span className="text-gray-500">(452)</span>
          </div>
          <p className="text-gray-600">Served With Green Chutney.</p>
        </div>

        <div className="ml-4 flex flex-col items-end">
          <img
            src="/api/placeholder/100/100"
            alt="Grill Chicken"
            className="mb-2 h-24 w-24 rounded-lg object-cover"
          />
          <button className="rounded border border-green-500 bg-white px-4 py-1 font-medium text-green-500">
            ADD
          </button>
          <span className="mt-1 text-sm text-gray-500">Customisable</span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
