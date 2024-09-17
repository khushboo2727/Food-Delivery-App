import React, { useContext } from "react";
import './FoodItem.css';
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({id,name,price,description,image})=>{

const {cartItem,addToCart,removeFromCart} = useContext(StoreContext);

    return(
        <>
        <div className="food-item">
            <div className="food-item-img-contaner">
                <img src={image} alt="" className="food-item-image" />
                {!cartItem[id]? 
                <img src={assets.add_icon_white} className="add" onClick={()=>addToCart(id)}/> :
                 <div className="food-item-counter">
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} />
                    <p>{cartItem[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green}/>

                 </div>

                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
        </>
    )
}

export default FoodItem;