import styled from 'styled-components'


const DelivertStatus = styled.p`
    width: 80px;
    height: 16px;
    margin-left: 30px;
    color: #FFFFFF;
    font-size: 10px;
    background-color: ${(prop)=> prop.color ? prop.color : "#08B727"};
    @media only screen and (max-width: 450px){
        margin-left: 20px;
    }
`


export default DelivertStatus