import Header from './components/Header';
import RestaurantCard from './components/Restaurant-card';

export default function App() {
  return (
    <div className="mx-auto w-full">
      <Header />
      <div className="flex w-full">
        <div className="w-30 h-30 flex flex-wrap">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
      </div>
    </div>
  );
}
