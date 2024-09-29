import { IMG_CDN_URL } from "../constant";
const RestaurantCard = ({imageId , name , cusines , rating}) => {
    return (
        <div className="card">
            <img src={IMG_CDN_URL + imageId} style={{ width: '200px',height: '150px'  }} alt="food" />
            <h2>{name}</h2>
            <h3> {cusines}</h3>
            <h4>{rating} stars</h4>
        </div>
    );
}

export default RestaurantCard;