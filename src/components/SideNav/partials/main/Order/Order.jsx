import OrderRow from "./OrderRow"
import OrderCol from "./OrderCol"
import Cardspan from "./Cardspan"
import DelivertStatus from "./DeliveryStatus"
import TextLine from "./TextLine"
import Stack from '@mui/material/Stack'
import Button from "@mui/material/Button"

const Delivered = ()=>{
    return(
        <OrderRow>
            <OrderCol width="50%">
                <Cardspan width="30%">
                    <img src="https://picsum.photos/500/300?random=1" width="80px" height="80px" alt="product"/>
                    <DelivertStatus color="#08B727">Delivered</DelivertStatus>
                </Cardspan>
                <Cardspan width="70%" textl>
                    <h3 style={{margin: '0px'}}>Casual flat loafers</h3>
                    <TextLine size="16px" color="#686868">Size - EU: 36 US: 5.5</TextLine>
                    <TextLine size="12px" color="#E51515">$ 10,000</TextLine>
                    <TextLine size="12px">Qty: 1</TextLine>
                    <TextLine size="12px">On 20/07/2020</TextLine>
                </Cardspan>
            </OrderCol>
            <OrderCol width="20%">
                <Cardspan textl textlM>
                    <h5 style={{margin: '0px', paddingBottom: "10px"}}>Payment details</h5>
                    <TextLine size="12px" color="#686868">Item’s total - $ 10,000 </TextLine>
                    <TextLine size="12px" color="#686868">Delivery fee - $ 2,000 </TextLine>
                    <TextLine size="12px" color="#686868">TOTAL - $ 12,000 </TextLine>
                </Cardspan>
            </OrderCol>
            <OrderCol width="30%">
            <Cardspan textl textlM>
                    <h5 style={{margin: '0px', paddingBottom: "5px"}}>Delivery method</h5>
                    <TextLine size="12px" color="#686868">Door delivery</TextLine>
                    <h5 style={{margin: '0px', paddingBottom: "0px", paddingTop: "10px"}}>Shipping address</h5>
                    <TextLine size="12px" color="#686868">Ayokunle Oriolowo <br /> 4, Barnawa Close, Barnawa Kaduna.</TextLine>
                </Cardspan>
            </OrderCol>
        </OrderRow>
    )
}


const Toarrive = ()=>{
    return(
        <OrderRow MT="50px">
            <OrderCol width="50%">
                <Cardspan width="30%">
                    <img src="https://picsum.photos/500/300?random=1" width="80px" height="80px" alt="product"/>
                    <DelivertStatus color="#F07B4E">To arrive</DelivertStatus>
                </Cardspan>
                <Cardspan width="70%" textl>
                    <h3 style={{margin: '0px'}}>Casual flat loafers</h3>
                    <TextLine size="16px" color="#686868">Size - XS</TextLine>
                    <TextLine size="12px" color="#E51515">$ 10,000</TextLine>
                    <TextLine size="12px">Qty: 1</TextLine>
                    <TextLine size="12px">Between 20/07/2020 - 25/07/2020</TextLine>
                </Cardspan>
            </OrderCol>
            <OrderCol width="20%">
                <Cardspan textl textlM>
                    <h5 style={{margin: '0px', paddingBottom: "10px"}}>Payment details</h5>
                    <TextLine size="12px" color="#686868">Item’s total - $ 10,000 </TextLine>
                    <TextLine size="12px" color="#686868">Delivery fee - $ 2,000 </TextLine>
                    <TextLine size="12px" color="#686868">TOTAL - $ 12,000 </TextLine>
                </Cardspan>
            </OrderCol>
            <OrderCol width="30%">
            <Cardspan textl textlM>
                    <h5 style={{margin: '0px', paddingBottom: "5px"}}>Delivery method</h5>
                    <TextLine size="12px" color="#686868">Door delivery</TextLine>
                    <h5 style={{margin: '0px', paddingBottom: "0px", paddingTop: "10px"}}>Shipping address</h5>
                    <TextLine size="12px" color="#686868">Ayokunle Oriolowo <br /> 4, Barnawa Close, Barnawa Kaduna.</TextLine>
                </Cardspan>
            </OrderCol>
        </OrderRow>
    )
}


const Order = ()=>{
    return(
        <div>
            <h1>My Orders</h1>
            <Delivered />
            <Stack 
                direction="row" 
                spacing={4}
                justifyContent={{xs: "center", sm: "center", md:"flex-start"}}
            >
                <Button variant="contained" color="error">ORDER AGAIN</Button>
                <Button variant="outlined" color="error">REQUEST A RETURN</Button>
            </Stack>
            <Toarrive />
        </div>
    )
}


export default Order