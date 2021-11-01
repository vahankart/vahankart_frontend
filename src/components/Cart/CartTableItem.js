import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
import { connect, useDispatch } from "react-redux";
import { setFav } from "../../redux/favSlice";
import {BsChevronDown} from 'react-icons/bs'

const CardTableItemWrapper = styled.tr`
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  margin-bottom: 30px;
  td {
    display: flex;

    width: 20%;
    align-items: center;
    justify-content: center;
    &:not(:last-child) {
      border-right: 0.5px solid #00000058;
    }
    &:first-child {
      width: 50%;
      padding: 20px;
      justify-content: flex-start;
    }
    &:nth-child(2) {
      width: 10%;
      justify-content: center;
    }
    .image {
      width: 30%;
      @media (min-width: 768px) {
        width: 85px;
        height: 85px;
      }
      img {
        width: 100%;
      }
    }
    .body {
      display: flex;
      padding-left:30px;
      flex-direction: column;
      flex:1;
    }
  }
  h3 {
    font-family: Mulish;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 18px;
    letter-spacing: 0.2px;
    margin-bottom: 0;
  }
  .size {
    font-family: Mulish;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 15px;
    letter-spacing: 0.2px;
    margin-bottom: 0;
  }
  .bottom {
    display: flex;
    p {
      margin-right: 20px;
      color: #e51515;
      display: flex;
      align-items: center;
      font-family: Mulish;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 18px;
      svg {
        margin-right: 10px;
      }
    }
  }
  .quantity{
      span{
        border-bottom: 1px solid #C4C4C4;
        width:50%;
        display:flex;
        justify-content: space-around;
        align-items:center;
        svg{
            font-size:15px;
        }
      }
  }
`;

const mapStateToProps = (state) => ({
  fav: state.favorite.fav,
});

function CartTableItem({
  cartImage,
  size,
  productName,
  quantity,
  unitPrice,
  subTotal,
  fav,
}) {
  const dispatch = useDispatch();

  return (
    <CardTableItemWrapper>
      <td>
        <div className="image">
          <img src={cartImage} alt="" />
        </div>
        <div className="body">
          <div className="description-body">
            <h3>{productName}</h3>
            <p className="size">Size - {size}</p>
          </div>
          <div className="bottom">
            {fav ? (
              <p onClick={() => dispatch(setFav(false))}>
                <AiFillHeart />
                Favourated
              </p>
            ) : (
              <p onClick={() => dispatch(setFav(true))}>
                <AiOutlineHeart />
                Move to Favourates
              </p>
            )}
            <p>
              <IoIosCloseCircle /> Remove
            </p>
          </div>
        </div>
      </td>
      <td className="quantity">
          <span>{quantity} <BsChevronDown /></span></td>
      <td>$ {unitPrice}</td>
      <td>$ {subTotal}</td>
    </CardTableItemWrapper>
  );
}

export default connect(mapStateToProps)(CartTableItem);
