/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './App.css'
import { React, useState} from "react";
import Product from './Product';
import Styles from "./Product.module.css";
import Header from './Header';
import Footer from './Footer';
import Card from './Card';

const cards =[
    {
        name:"Fancy Product",
        price:"$40.00 - $80.00",
        image : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        rating : false,
       style : false,
       isOnSale : false,
    },
    {
        name:"Special Item",
        price:"$20.00 - $18.00",
        image : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        rating : true,
        style:true,
        isOnSale : true,
    },
    {
    
        name:"Sale Item",
        price:"$50.00 - $25.00",
        image : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        rating : false,
        style:true,
        isOnSale : true,
    }, 
   {
        name:"Popular Item",
        price:"$40.00",
        image : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        rating : true,
        style : false,
        isOnSale : false,
    },
    {
        name:"Sale Item",
        price:"$50.00 - $25.00",
        image : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        rating : false,
       style:true,
       isOnSale : true,
    },
    {
        name:"Fancy Product",
        price:"$120.00 - $280.00",
        image : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        rating : false,
        style : false,
        isOnSale : true,
    },
    {
        name:"Special Item",
        price:"$20.00 - $18.00",
        image : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        rating : true,
       style:true,
       isOnSale : true,
    },
    {
        name:"Popular Item",
        price:"$40.00",
        image : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        rating : true,
        style : false,
        isOnSale : false,
    },
   ];

function App() {
   //here used a state hook to initilize count
   const [count,setCount] = useState(0);
    return (
        <>
        < Header />
        < Card count={count} />
    <div className={Styles["container"]}>
      {cards.map ((data,index) =>( 
      <Product  {...data} key={index}   
      setCount={setCount} count={count}/>
      ))}
     </div>
     <Footer />
     </>
    );
}

export default App