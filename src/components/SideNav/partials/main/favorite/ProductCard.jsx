import styled from 'styled-components'


const ProductCard = styled.span`
    width: 310px;
    height: max-content;
    margin: 10px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
    @media only screen and (max-width: 900px){
        width: 310px;
    }
    @media only screen and (max-width: 500px){
        width: 310px;
    }
`


export default ProductCard