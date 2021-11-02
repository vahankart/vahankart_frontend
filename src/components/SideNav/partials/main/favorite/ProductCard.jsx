import styled from 'styled-components'


const ProductCard = styled.span`
    width: 310px;
    height: max-content;
    margin: 10px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
    @media only screen and (max-width: 1260px){
        width: 350px;
    }
    @media only screen and (max-width: 900px){
        width: 400px;
    }
    @media only screen and (max-width: 500px){
        width: 95%;
    }
`


export default ProductCard