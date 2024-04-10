import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoMdCart } from "react-icons/io";


function CartWidget(){

  return (
    <div className="cart-widget">
      <IoMdCart></IoMdCart>
    </div>


  );
}
export default CartWidget;