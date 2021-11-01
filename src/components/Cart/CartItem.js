import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
import { connect, useDispatch } from "react-redux";
import { setFav } from "../../redux/favSlice";

const CardItemWrapper = styled.div`
  padding: 5%;
  box-shadow: 0px 3px 11px #00000045;
  margin: auto;
  border-radius: 10px;
  margin-bottom: 20px;
  position: relative;
  padding-top: 40px;
  max-width: 400px;
  display: flex;
  .close {
    position: absolute;
    right: 20px;
    top: 5px;
    svg {
      color: #e51515;
      font-size: 20px;
    }
  }
  .image {
    width: 30%;
    img {
      width: 100%;
      object-fit: contain;
    }
  }
  .body {
    padding-left: 5%;
    width: 70%;
    h4,
    h3,
    p {
      margin: 0 0 10px;
    }
    h3 {
      font-family: Mulish;
      font-style: normal;
      font-weight: 600;
      font-size: 17px;
      line-height: 18px;
      letter-spacing: 0.2px;
    }
    .size {
      font-family: Mulish;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 15px;
      letter-spacing: 0.2px;
    }
  }
  h4{
      font-family: Roboto;
font-size: 17px;
line-height: 23px;
    }
    .quantity{
      font-family: Mulish;
      font-weight: 600;
      font-size: 20px;
      line-height: 15px;
      letter-spacing: 0.2px;
    }
  .bottom {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items:flex-center;
    p{
      margin-bottom:0;
      svg{
        font-size:30px;
      color:#e51515;
      }
      
    }
  }
`;

const mapStateToProps = (state) => ({
  fav: state.favorite.fav,
});

function CartItem({
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
    <CardItemWrapper>
      <p className="close">
        <IoIosCloseCircle />
      </p>
      <div className="image">
        <img src={cartImage} alt="" />
      </div>
      <div className="body">
        <h3>{productName}</h3>
        <p className="size">Size - {size}</p>
        <h4 className="unit">Unit Price: $ {unitPrice} </h4>

        <h4>Subtotal: $ {subTotal}</h4>
        <div className="bottom">
          {fav ? (
            <p onClick={() => dispatch(setFav(false))}>
              <AiFillHeart />
            </p>
          ) : (
            <p onClick={() => dispatch(setFav(true))}>
              <AiOutlineHeart />
            </p>
          )}
          <td className="quantity">{quantity}</td>
        </div>
      </div>
    </CardItemWrapper>
  );
}

export default connect(mapStateToProps)(CartItem);
