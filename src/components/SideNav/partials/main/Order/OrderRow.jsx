import styled from 'styled-components'


const OrderRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    padding-bottom: 50px;
    margin-top: ${(prop)=> prop.MT ? prop.MT : "0px"};
    @media only screen and (max-width: 450px){
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`


export default OrderRow