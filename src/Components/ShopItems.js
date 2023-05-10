import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled.ul`
  text-align: center; 
  font-size: 1.5em;
  color: #fff;
  background-color: hotpink;
  margin: 0;
  padding: 1em;
`

const ShopItems = ({ products, addToBasket }) => {

    const listItems = products.map((product, index) => {

      return (
        <div key={index}>
          {" "}
          <Title>{product.item}</Title>
          <h3>{product.type}</h3>
          <img className='App-logo' src={product.image} />
          {/* <img id="pic" src={pic} alt=""/> */}
          <p>£{product.price}{" "}</p>
        </div>
      );
    });
  
    const handleBasket = () => {
        addToBasket(products)
    }
    return (
      <div>
        <h4>Spinning Goods</h4>

        {listItems}

        <button onClick={handleBasket}>Add to Basket</button>
      </div>
    );
  };

export default ShopItems;