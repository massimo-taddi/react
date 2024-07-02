//l'entrypoint è il file chiamato "index.js"

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    //per poter mettere più elementi html tutto deve essere messo
    //tra tag <> </>
    <>
      <img src="pizzas/spinaci.jpg" alt="Pizza spinaci"></img>
      <h1>Hello React</h1>
      <p>React Bello</p>
      <Pizza />
    </>
  );
}

function Pizza() {
  return (
    <>
      <h2>Pizza</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
//React.strictMode re renderizza i valori due volte per controllare
//se si sta usando l'api (react-DOM) in modo sbagliato
//e per debuggare
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
