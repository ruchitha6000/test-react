import React from "react";
import Fruit from "./Fruit";

function Fruits() {
  let fruits = [
    { name: "Apple", price: 100 },
    { name: "Banana", price: 200 },
    { name: "Orange", price: 300 },
    { name: "PineApple", price: 400 }
  ];
  return (
    <div>
        {
            fruits.map((fruit=>(
                <Fruit name={fruit.name} price={fruit.price}/>
            )))
        }
    </div>
    );
}

export default Fruits;
