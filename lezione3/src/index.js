//l'entrypoint è il file chiamato "index.js"

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

function Header() {
  //const style = { color: "red", fontSize: "40px", textTransform: "uppercase" };
  const style = {};
  return (
    <header style={style} className="header footer">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <>
      <main className="menu">
        <h2>Our menu</h2>

        {numPizzas > 0 ? (
          <ul className="pizzas">
            {pizzaData.map((element) => (
              <Pizza
                key={element.name}
                name={element.name}
                ingredients={element.ingredients}
                price={element.price}
                photoName={element.photoName}
              />
            ))}
          </ul>
        ) : (
          <p>We're still working on our menu come back later</p>
        )}
      </main>
    </>
  );
}

function Footer() {
  const hour = new Date().getHours();

  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen && (
        <div>
          <p>Open</p>
          <button className="btn">Order</button>
        </div>
      )}
      {new Date().toLocaleTimeString()}We're currently Open!
    </footer>
  );
}

function Pizza(props) {
  return (
    <>
      <li>
        <img src={props.photoName} alt={props.name}></img>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
      </li>
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
