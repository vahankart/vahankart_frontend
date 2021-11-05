import React,{useState} from 'react'
import {makeStyles} from '@mui/styles'
import styled from 'styled-components'
import Grid from '@mui/material/Grid'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const InfoSectionComponent = styled.div`
    width:fit-content;
    height:100%;
    display:flex;
    flex-direction:column;
    text-align:left;
    padding-left:150px;
`
const Price = styled.p`
    color:${props=>props.original?"#777777":"black"};
    text-decoration:${props=>props.original?"line-through":"none"};
    font-size:${props=>props.original?"1.2em":"1.5em"};
    margin-block-start:${props=>props.original?"15px":"0px"};
    margin-block-end:${props=>props.original?"0px":"15px"};   
`
const Vehicle = styled.div`
    width:50px;
    height:50px;
    border-radius:50%;
    background: #00000033;
    margin:0px 5px;
`
const QuantitySection = styled.div`
    display:flex;
    flex-direction:row;
    width:fit-content;
    margin-top:10px;
`
const QuantityButton = styled.button`
    width:20px;
    height:20px;
    margin:0px 5px;
    color:${props=>props.add?"white":"black"};
    background-color:${props=>props.add?"red":"white"};
    border:${props=>props.add?"none":"1px solid black"};
    cursor:pointer;
`
const AddToCart = styled.button`
    width:fit-content;
    height:fit-content;
    font-size:1em;
    padding:7px 12px;
    background:red;
    color:white;
    border:none;
    border-radius:1px;
    cursor:pointer;
`

const useStyles = makeStyles({
    productName:{
        fontSize:"3em",
        marginBlockEnd:"5px"
    },
    vehicleSection:{
        display:"flex",
        flexdirection:"row",
        marginBottom:"20px"
    }
})

function InfoSection() {

    const classes = useStyles()
    
    //states for details
    const [productName,setProductName] = useState("Product Name")
    const [originalPrice,setOriginalPrice] = useState(21000)
    const [currentPrice,setCurrentPrice] = useState(7495)
    const [vehicles,setVehicles] = useState([1,2])
    const [quantity,setQuantity] = useState(1)

    //function to increase the quantity
    const handleIncrease = ()=>{
        setQuantity(quantity+1)
    }

    //function to decrease the quantity
    const handleDecrease = ()=>{
        if(quantity>0){
            setQuantity(quantity-1)
        }
    }

    //function to add an item to cart
    const handleAdd = ()=>{}

    return (
        <InfoSectionComponent>
            <p className={classes.productName}>{productName}</p>
            <Price original >${Number(originalPrice).toLocaleString()}</Price>
            <Price current>${Number(currentPrice).toLocaleString()}</Price>
            <div>
                <p>Choose Vehicle</p>
                <span className={classes.vehicleSection}>
                    {vehicles.map(vehicle=> <Vehicle></Vehicle>)}
                </span>
            </div>
            <Grid container>
                <Grid item lg={4} sm={12}>
                    <QuantitySection>
                        <QuantityButton subtract onClick={handleDecrease}>-</QuantityButton>
                        {quantity}
                        <QuantityButton add onClick={handleIncrease}>+</QuantityButton>
                    </QuantitySection>
                </Grid>
                <Grid item lg={8} sm={12}>
                    <AddToCart onClick={handleAdd}> <ShoppingCartOutlinedIcon/> Add To Cart</AddToCart>
                </Grid>
            </Grid>
        </InfoSectionComponent>
    )
}

export default InfoSection


