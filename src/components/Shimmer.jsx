const Shimmer = () => {
  return (
    <div className="grid w-full max-w-screen-2xl grid-cols-1 gap-8 p-4 sm:grid-cols-2 lg:grid-cols-5">
      {Array(10)
        .fill()
        .map((_, index) => (
          <div
            key={index}
            className="mx-4 mb-4 w-full max-w-xs animate-pulse rounded-lg bg-white shadow-md"
          >
            <div className="h-40 w-full rounded-t-lg bg-gray-300"></div>
            <div className="p-4">
              <div className="mb-4 h-5 w-3/4 rounded bg-gray-300"></div>
              <div className="mb-2 h-4 w-1/2 rounded bg-gray-300"></div>
              <div className="mb-2 h-4 w-1/3 rounded bg-gray-300"></div>
              <div className="mt-2 flex items-center">
                <div className="h-4 w-5 rounded bg-gray-300"></div>
                <div className="ml-2 h-4 w-10 rounded bg-gray-300"></div>
                <div className="ml-4 h-4 w-12 rounded bg-gray-300"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
