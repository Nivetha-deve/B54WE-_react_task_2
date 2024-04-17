/* eslint-disable react/prop-types */
import PropType from "prop-types";
import Styles from "./Product.module.css";
import { useState } from "react";

const Product = ( { name, price ,image ,rating ,setCount,count,style,isOnSale}) => {
  // .split (" - ") is used to repersented in the price value
    const prices = price.split(" - ");
    //used state hook to show the count 
  const [show ,setShow] = useState(true);
  //In this function we are increasing the count when click the add button
    function handleadd(){
        setShow(!show);
        setCount(count +1);
    }
    //here we are removing the item from card when clicking remove button
    function handleremove(){
        setShow(!show);
        setCount(count -1);
    }
    return (
        <div className={Styles.gridContainer}>
             <div className={Styles["body"]}>
               <img src={image} alt="" />
              {/* Sale Icon */}
            {isOnSale && <div className={Styles.saleIcon}>Sale</div>}
          <div className={Styles["card-body p-4"]}>
            <div className={Styles["text-center"]}>
      <h3 className={Styles["title"]}>{name}</h3>
      {/* here used terniory operator to shoe if its true show rating */}
      { rating && <p className={Styles["rate"]}>★★★★★</p> }
      <p className={Styles["text"]}>
        {/* here the same for old price we are using strike style for that we have separate its array  */}
        {/* first price */}
       { style ?(
         <span className={Styles["original-price"]}>{prices[0]}</span>
       ) : (
         <span className={Styles["org-price"]}>{prices[0]}</span>
       )
      }
        <span className={Styles["current-price"]}>{prices[1]}</span> {/* Second price */}
        </p> 
        </div>
        </div>
      { show ? (
        <button onClick={handleadd} className={Styles["btn"]}>Add Cart</button> 
      ) : (
        <button onClick={handleremove} className={Styles["btn"]}>Remove Cart</button>
      )
    }
  </div>
  </div>
    );
};

export default Product;

Product.PropType = {
    name:PropType.string,
    price:PropType.string,
    image:PropType.string,
    rating:PropType.bool,
    style:PropType.bool,
    isOnSale:PropType.bool,
}