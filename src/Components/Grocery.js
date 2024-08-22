import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import images from '../images/img1.jpeg';
import images1 from '../images/img2.jpeg';
import images2 from '../images/img3.jpeg';

function Grocery() {
  const [appleCount, setAppleCount] = useState(0);
  const [orangeCount, setOrangeCount] = useState(0);
  const [grapesCount, setGrapesCount] = useState(0);
  const applePrice = 80;
  const orangePrice = 50;
  const grapesPrice = 70;

  const decrease = (item) => {
    switch(item) {
      case 'apple':
        if (appleCount > 0) setAppleCount(appleCount - 1);
        break;
      case 'orange':
        if (orangeCount > 0) setOrangeCount(orangeCount - 1);
        break;
      case 'grapes':
        if (grapesCount > 0) setGrapesCount(grapesCount - 1);
        break;
      default:
        break;
    }
  };

  const increase = (item) => {
    switch(item) {
      case 'apple':
        setAppleCount(appleCount + 1);
        break;
      case 'orange':
        setOrangeCount(orangeCount + 1);
        break;
      case 'grapes':
        setGrapesCount(grapesCount + 1);
        break;
      default:
        break;
    }
  };

  const reset = (item) => {
    switch(item) {
      case 'apple':
        setAppleCount(0);
        break;
      case 'orange':
        setOrangeCount(0);
        break;
      case 'grapes':
        setGrapesCount(0);
        break
        if (appleCount > 0) setAppleCount(appleCount - 1);
        break;
      case 'orange':
        if (orangeCount > 0) setOrangeCount(orangeCount - 1);
        break;
      case 'grapes':
        if (grapesCount > 0) setGrapesCount(grapesCount - 1);
        break;
      default:
        break;
    }
  };

  const appleAmount = appleCount * applePrice;
  const orangeAmount = orangeCount * orangePrice;
  const grapesAmount = grapesCount * grapesPrice;
  const totalCount = appleCount + orangeCount + grapesCount;
  const totalAmount = appleAmount + orangeAmount + grapesAmount;

  return (
    <>
      <div className="my-5 text-center pt-5 row">
        <div className="col-4 card">
          <img src={images}></img><br />
          <div className="text-center">
            <button className='btn btn-primary me-2' onClick={() => increase('apple')}>+</button>
            <button className='btn btn-primary me-2' onClick={() => decrease('apple')}>-</button>
            <button className='btn btn-primary me-2' onClick={() => reset('apple')}>Reset</button>
          </div>
          <br></br>
          <p>Count: {appleCount}</p>
          <p>Amount: {appleAmount.toFixed(2)}</p>
        </div>
        <div className="col-4 card">
          <img src={images1} className='w-75 '></img><br />
          <div className="text-center">
            <button className='btn btn-primary me-2' onClick={() => increase('orange')}>+</button>
            <button className='btn btn-primary me-2' onClick={() => decrease('orange')}>-</button>
            <button className='btn btn-primary me-2' onClick={() => reset('orange')}>Reset</button>
          </div><br></br>
          <p>Count: {orangeCount}</p>
          <p>Amount: {orangeAmount.toFixed(2)}</p>
        </div>
        <div className="col-4 card ">
          <img src={images2} className='w-75'></img><br />
          <div className="text-center">
            <button className='btn btn-primary me-2' onClick={() => increase('grapes')}>+</button>
            <button className='btn btn-primary me-2' onClick={() => decrease('grapes')}>-</button>
            <button className='btn btn-primary me-2' onClick={() => reset('grapes')}>Reset</button>
          </div>
          <p>Count: {grapesCount}</p>
          <p>Amount: {grapesAmount.toFixed(2)}</p>
        </div>
      </div>
      <div className="text-center pt-3">
        <h3>Total Count: {totalCount}</h3>
        <h3>Total Amount: {totalAmount.toFixed(2)}</h3>
      </div>
    </>
  )
}

export default Grocery;
