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
      <div>
        <Counter></Counter>
        <h3>This album Contain number of posts</h3>
        <Albums></Albums>
        <h2>Dynamic User List</h2>
        <Users></Users>
        <h2>Dynamic Post List</h2>
        <Posts ></Posts>
        <h2> Product Show with Map function</h2>
        {
         //posts.map(pd =><Posts post={pd}></Posts>)
        }
      </div>
    </div>
  );
}

function Counter(){
  const [stateCount, setCount] = useState(0);
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
function Posts() {
  const [posts, setPosts] = useState ([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(pos => pos.json())
      .then(data => setPosts(data))
  }, [])
  return(
    <div>
      <h2>Dynamic posts from JSON placeholder : {posts.length} </h2>
      <ol>
        {
          posts.map(us =><li>{us.title}</li>)
        }
      </ol>
    </div>
  );
}

function Albums(){
  const [album, setAlbum] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(alb => alb.json())
    .then(data => setAlbum(data))
  }, [])

  const albumStyle = {

    backgroundColor: 'cyan'
  }
  return(
    <div style={albumStyle}>
      <h3>This album Contain {album.length} number of posts</h3>
      
      <ul>
        {
          album.map(al => <li>{al.title}</li>)
        }
      </ul>

    </div>
  );}

export default App;