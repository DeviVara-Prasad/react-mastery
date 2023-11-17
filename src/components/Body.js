import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/restaurantMockData";
import { useEffect, useState } from "react";
const Body = () => {
    const [restaurantsData,setRestaurantsData] = useState(restaurants)
    useEffect(
        () => {
            fetchRestaurentData();
        },
    [])

    const fetchRestaurentData = async () =>{
        try{
            const res = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9879659&lng=77.6895248&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
            console.log(res);
            const jsonData = await res.json();
            console.log(jsonData);
        }catch(e){
            console.error(e);
        }
    }
    return (
        <div className="body">
        <div className="search-container">
            <input type="text" className="search-box" />
            <button className="search-button">Search</button>
        </div>
        <div className="filters">
            <span className="res-filters">Filters</span>
            <button className="btn-filter top-rated"
            onClick={
                () => {
                    setRestaurantsData(
                        (restaurantsData) => restaurantsData.filter(
                            (restaurants) =>{
                                return restaurants.info.avgRating>4
                            }
                        )
                    )
                }
            }
            
            >Top-Rated</button>
        </div>
        <div className="res-container">
            {restaurantsData.map((restaurant) => {
            return (
                <RestaurantCard
                key={restaurant.info.id}
                resData={restaurant?.info}
                />
            );
            })}
        </div>
        </div>
    );
};

export default Body;
