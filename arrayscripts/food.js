"use strict";

let dinner = [
  { item: "Seafood Paella", price: 23.99 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Esquites", price: 4.25 },
  { item: "Horchata", price: 2.79 },
];
for (let f = 0; f < dinner.length; f++) { 
  const element = dinner[f]; 
  console.log(element.price); 
}
