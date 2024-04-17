 import Styles from "./Product.module.css";

function Header(){
    return(
<div className={Styles["card-text-center"]}>
  <div className={Styles["card-header"]}>
        <h4 className={Styles["heading"]}>Start Bootstrap</h4>
        <a className={Styles["nav-link"]} >Home</a>
     <a className={Styles["nav-link-disabled"]}>About</a>
     <a className={Styles["nav-link-disabled" ]}>Shop</a>
  </div>
  <div className={Styles["card-body"]}>
    <h2 className={Styles["card-title"]}>Shop in style</h2>
    <p className={Styles["card-text"]}>With this shop hompeage template</p>
  </div>
</div>
    )
}

export default Header;