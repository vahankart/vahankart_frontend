import styled from 'styled-components'


const OrderCol = styled.span`
    width: ${(prop) => prop.width ? prop.width : "100%"};
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 450px){
        width: 95%;
    }
`


export default OrderCol