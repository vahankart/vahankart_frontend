import styled from "styled-components";
import { useState, useEffect } from "react";
import CartTableItem from "./CartTableItem";
import CartItem from "./CartItem";

const CartWrapper = styled.section`
  padding: 5%;
  @media(min-width:1200px){
      padding:5% 147px 5% 128px;
  }
  .table {
    display: flex;
    flex-direction: column;
  }
  h2 {
    font-family: Mulish;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 18px;
    margin-bottom: 50px;

    letter-spacing: 0.2px;

    color: #000000;
  }
  tr {
    display: flex;
  }
  th {
    font-family: Mulish;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 20px;
    text-transform: uppercase;

    letter-spacing: 0.2px;

    color: #686868;

    width: 20%;
    align-items: center;

    &:first-child {
      width: 50%;
      text-align: left;
    }
    &:nth-child(2) {
      width: 10%;
      justify-content: center;
    }
  }
  .total {
    width: 100%;
    text-align: right;
    margin-bottom:60px;
    p {
      text-transform: uppercase;
      font-family: Mulish;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      margin-bottom:0;
      line-height: 30px;
      span {
        font-family: Roboto;
        margin-left: 50px;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 28px;
      }
    }
    span {
      font-family: Mulish;
      font-style: normal;
      font-weight: 600;
      margin-top:0;
      font-size: 13px;
      line-height: 18px;
      letter-spacing: 0.2px;
    }
  }
  .butns{
      width:100%;
      max-width: 700px;
      margin-left:auto;
      button{
          width:50%;
          color:#ffffff;
          height:50px;
          background: #E51515;
          border:none;
          &:first-child{
              border-radius: 6px 0 0 6px;
          }
          &:last-child{
              border-radius:0 6px 6px 0;
          }
      }
  }
`;

function Cart() {
  const [table, setTable] = useState(false);
  const checkScreenWidth = () => {
    if (window.innerWidth >= 768) {
      setTable(true);
    } else {
      setTable(false);
    }
  };
  useEffect(() => {
    checkScreenWidth();
  }, []);
  window.addEventListener("resize", checkScreenWidth);

  const cartList = [
    {
      cartImage: "./images/iphone.jpg",
      size: "XL",
      productName:
        "Apple iPhone 8 Plus Factory Unlocked Original Mobile Phone 4G LTE 5.5' Hexa-core A11 Dual 12MP RAM 3GB ROM 64GB/256GB NFC",
      quantity: 1,
      unitPrice: 350,
      subTotal: 350,
    },
    {
      cartImage: "./images/airforce.jpg",
      size: "XLl",
      productName:
        "New Air Force 2021 Summer Sneakers For Women Leather Breathable Vulcanized Casual Platform Skateboarding Female Flat Shoes",
      quantity: 1,
      unitPrice: 50,
      subTotal: 50,
    },
  ];
  return (
    <CartWrapper>
      <h2>Shopping Cart (2 item)</h2>
      {table ? (
        <table className="table">
          <tr>
            <th>Item Descrictiption</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Sub Total</th>
          </tr>
          {cartList.map((item, i) => {
            return (
              <CartTableItem
                cartImage={item.cartImage}
                size={item.size}
                productName={item.productName}
                quantity={item.quantity}
                unitPrice={item.unitPrice}
                subTotal={item.subTotal}
                key={i}
              />
            );
          })}
        </table>
      ) : (
        <div>
          {cartList.map((item, i) => {
            return (
              <CartItem
                cartImage={item.cartImage}
                size={item.size}
                productName={item.productName}
                quantity={item.quantity}
                unitPrice={item.unitPrice}
                subTotal={item.subTotal}
                key={i}
              />
            );
          })}
        </div>
      )}
      <div className="total">
        <p>
          total: <span>$20,000</span>
        </p>
        <span>Delivery fee not included yet</span>
      </div>
      <div className="butns">
        <button>Sign in</button>
        <button>Sign in</button>
      </div>
    </CartWrapper>
  );
}

export default Cart;
