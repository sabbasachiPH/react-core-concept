import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const bestPlayer = ['Sachin Tendulker', 'Shourav Ganguly', 'Rahul David','Yuvraj Sing']
  const country = ['India']
  const products = [
    {name: 'product1', price: 100, company: 'company1'},
    {name: 'product2', price: 100, company: 'company2'},
    {name: 'product3', price: 100, company: 'company3'},
    {name: 'product4', price: 100, company: 'company4'},
    
  ]
  const containerStyle = {
    display: 'flex',
    flexDirection:'column'
  }
  return (
    <div className="container" style={containerStyle}>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <h2>Product Show Using Array Index</h2>
        {/* <Person name="Sachin Tendulkar" country="India"></Person>
        <Person name="Sourav Ganguly" country="India"></Person>
        <Person name="Ricky Ponting" country="Australia"></Person> */}
        <Player name={bestPlayer[0]} country={country[0]}></Player>
        <Player name={bestPlayer[1]} country={country[0]}></Player>
        <Player name={bestPlayer[2]} country={country[0]}></Player>
      </div>
      <div>
        <Counter></Counter>
        <h2>Dynamic User List</h2>
        <Users></Users>
        <h2>Dynamic Post List</h2>
        
        <Posts></Posts>
        <h2> Product Show with Map function</h2>
        {
         products.map(pd =><Product product={pd}></Product>) 
        }
      </div>
    </div>
  );
}
// function Person(props){
//   const myStyle = {
//     border: '2px solid lightsalmon',
//     margin: '10px',
//   }
//   return (
//     <div style={myStyle}>
//       <h1>Name: {props.name}</h1>
//       <p>Country: {props.country}</p>
//     </div>
//   )
// }
function Player(props){
  const playerStyle = {
    border: '2px solid red',
    margin: '5px',
    width: '300px',
    float: 'left'
  }
  return (
    <div style={playerStyle}>
      <h3>Player Name: {props.name}</h3>
      <h4>Country:{props.country}</h4>

    </div>
  )
}

function Product(props){
  const productStyle = {
    textAlign: 'center',
    height: '200px',
    width: '200px',
    backgroundColor: 'lightgray',
    margin: '10px',
    padding: '5px',
    float:'left'
  }
  const {name, price, company} = props.product;
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h2>Tk-{price}</h2>
      <h2>{company}</h2>
      <button>Buy Now</button>
    </div>
  );
}
function Counter(){
  const [stateCount, setCount] = useState(0);
  // const handleIncrease = () => {
  //   const newStateCount = stateCount + 1;
  //   setCount(newStateCount);
  // };
  const handleIncrease = () => setCount(stateCount + 1);
  const handleDecrease = () => setCount(stateCount - 1);

  return (
    // <div>
    //   <h1>Count: {stateCount} </h1>
    //   <button onClick = {handleIncrease}>Increase</button>
    //   <button onClick = {handleDecrease}>Decrease</button>
    // </div>
      <div>
        <h2>Counter with Oneline Arrow Function</h2>
       <h1>Count: {stateCount} </h1>
       <button onClick ={ () => setCount(stateCount + 1)}>Increase</button>
       <button onClick = {() => setCount(stateCount - 1)}>Decrease</button>
     </div>
  );
}
function Users(pros) {
  const [users, setUsers ] = useState([])
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h2> Dynamic User:{users.length} </h2>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  );
}
function Posts(props) {
  const [posts, setPosts] = useState ([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(pos => pos.json())
      .then(data => setPosts(data))
  }, [])

  return(
    <div>
      <h2>Dynamic posts from JSON placeholder : {posts.length} </h2>
      <ol>
        {
          posts.map(post => 
        }
      </ol>
    </div>
  );
}

export default App;