import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const AccountName = ['Savings', 'CD', 'SND', 'JBMAP']
  const IntRate = [5.00, 0.00, 5.00, 12.00]
  const products = [
    {name: 'Photoshop', price: '$90.00'},
    {name: 'Illustrature', price: '$80.00'},
    {name: 'PDF reader', price: '$70.00'},
    {name: 'Photoshop1', price: '$60.00'},
    {name: 'Photoshop2', price: '$50.00'},
    {name: 'Photoshop3', price: '$50.00'},
    {name: 'Photoshop4', price: '$50.00'},
    {name: 'Photoshop5', price: '$50.00'},
    {name: 'Photoshop6', price: '$50.00'},
    {name: 'Photoshop7', price: '$50.00'},
  ]
  return (
      <div className="container" style={{display: 'Flex',flexDirection: 'column', textAlign: 'center'}}>
        <div className="App">
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </header> */}
        </div>
        <div>
          <h2>Dynamic Product List</h2>
            <ul>
              {
                products.map(pt => <li>{pt.name}</li>)
              }
            </ul>   
        </div> 
        <div>
          <h2>Dynamic Product Div</h2>
              {
                products.map(pd => <Products product={pd}></Products>)
              }  
        </div> 
        <div className="product">
          <h2>Procuct</h2>
          {/* <Products name = {products[0].name} price ={products[0].price} ></Products>
          <Products name = {products[1].name} price ={products[1].price} ></Products>
          <Products name = {products[2].name} price ={products[2].price} ></Products>
          <Products name = {products[3].name} price ={products[3].price} ></Products> */}

          <Products product = {products[0]}></Products>
          <Products product = {products[1]}></Products>
          <Products product = {products[2]}></Products>
          <Products product = {products[3]}></Products>
        </div> 
        <div>
          <h1>Account List:</h1>
          <Account name="Savings" intRate = '5.00'></Account>
          <Account name="Current" intRate = '00'></Account>
          <Account name="SND" intRate = '5.00'></Account>
          <Account name="JBMAP" intRate = '12.00'></Account>
          <Account name="JBDBS" intRate = '5.00'></Account>
        </div>
        {/** PASSING DATA USING a */}
        <div className="accountArray">
          <h1>Account List using Array</h1>
          <Account name = {AccountName[0]} intRate ={IntRate[0]} ></Account>
          <Account name = {AccountName[1]} intRate ={IntRate[1]} ></Account>
          <Account name = {AccountName[2]} intRate ={IntRate[2]} ></Account>
          <Account name = {AccountName[3]} intRate ={IntRate[3]} ></Account>
        </div>
      </div>
  );
}
function Products(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
    margin: '10px'
  }
  const {name, price}	 = props.product;
  return (
    <div className="" style={productStyle}>
      {/* 
      <h2>{props.name}</h2>
      <h1>{props.price}</h1> 
      */}
      {/**from array object */}
      {/* <h2>{props.products.name}</h2>
      <h1>{props.products.price}</h1> */}

      {/**From Array after destructuring */}
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy Now</button>
    </div>
  ); 
}


function Account(props) {
  const AccountStyle = {
    border: '2px solid blue',
    borderRadius: '10px',
    width: '250px',
    margin: '5px',
    padding: '5px',
    boxShadow: '5px 5px 10px gray',
    float: 'left'
  }
  return (
    <div className="account" style={AccountStyle}>
      <h3>Account Name: {props.name}</h3>
      <h4>Interest Rate: {props.intRate}</h4>
    </div>
  ); 
}



export default App;