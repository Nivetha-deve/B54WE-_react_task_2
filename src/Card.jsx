/* eslint-disable react/prop-types */

import Styles from "./Product.module.css";
   function Card ( {count}) {
    return (
      // here we simply passed the props and called it
        <>
      <div className={Styles["cart"]}> <i className="fa-solid fa-cart-shopping"></i>Card ({count})</div>
      </>
    )
}

export default Card;