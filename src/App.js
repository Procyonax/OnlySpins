import logo from "./logo.png";
import "./App.css";
import ShopFrontContainer from "./Containers/ShopFrontContainer";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ShopItems from "./Components/ShopItems";
import NavBar from "./Components/NavBar";

const App = () => {
  let shopItems = [
    {
      id: 1,
      item: "Washing Machine",
      type: "White good",
      image: "washing_machine.jpeg",
      price: 250,
    },
    {
      id: 2,
      item: "Earth",
      type: "Planet",
      image: "earth.jpeg",
      price: 10000000,
    },
    {
      id: 3,
      item: "Pinwheel",
      type: "Childs toy",
      image: "pinwheel.jpeg",
      price: 1.5,
    },
    {
      id: 4,
      item: "Hula Hoop",
      type: "Childs toy",
      image: "hula_hoop.jpeg",
      price: 5.0,
    },
    {
      id: 5,
      item: "Hamster's Wheel",
      type: "Rodent toy",
      image: "hamster_wheel.jpeg",
      price: 20,
    },
    {
      id: 6,
      item: "Ferris Wheel",
      type: "Amusement ride",
      image: "ferris_wheel.jpeg",
      price: 2000,
    },
    { id: 7, item: "Record", type: "Music", image: "record.jpeg", price: 25 },
    {
      id: 8,
      item: "Beyblade",
      type: "Childs toy",
      image: "beyblade.jpeg",
      price: 40,
    },
    {
      id: 9,
      item: "Tornado",
      type: "Act of god",
      image: "tornado.jpeg",
      price: 0,
    },
    {
      id: 10,
      item: "Windmill",
      type: "A structure",
      image: "windmill.jpeg",
      price: 450,
    },
  ];

  const [items, setShopItems] = useState(shopItems);
  const [basket, setBasket] = useState([])

  const addToBasket = (item) => {
      const updatedBasket = [...basket, item]
      setBasket(updatedBasket)

  }


  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopitems" element={<ShopItems products={items} addToBasket={addToBasket} />} />
        </Routes>
      </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ShopFrontContainer />
      </header>
    </div>
  );
};

export default App;
