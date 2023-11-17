import { RES_URL } from "../utils/constants";
import { GreenStar,OrangeStar } from "./StarRating";
const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, avgRating, sla, cuisines, areaName } =
    props.resData;
  return (
    <a className="res-card-link">
      <div className="res-card">
        <div className="img-card">
          <img
            className="res-img-card"
            src={`${RES_URL}${cloudinaryImageId}`}
            alt="Andhra Gun Powder"
          ></img>
        </div>
        <div className="res-details-card">
          <div className="res-card-name">{name}</div>
          <div className="res-card-subtext">
            <div className="res-star">
                {avgRating>4?<GreenStar/>:<OrangeStar/>}
            </div>
            <div className="res-rating">
              <span>{avgRating} • </span>
              {sla.slaString}
            </div>
          </div>
          <div className="res-card-description">
            <div className="res-card-cuisine">{cuisines.join(", ")}</div>
            <div className="res-address">{areaName}</div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default RestaurantCard;