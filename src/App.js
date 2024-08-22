import logo from './logo.svg';
import './App.css';
import { useState,useEffect,useReducer } from 'react';
import Grocery from './Components/Grocery';
// import images1 from'../src/images/img1.jpeg';
// import images2 from '../src/images/img2.jpeg';
// import images3 from '../src/images/img3.jpeg';
// import images4 from '../src/images/img4.jpeg';

function App() {
  return (
    <>
       <h2 style={{textAlign:'center',color:'red'}}>Shopping cart</h2>
       {/* <img src={images1}></img> */}
       <Grocery />
       
    </>
  );
}

export default App;
