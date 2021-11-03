import styled from 'styled-components'


const Cardspan = styled.span`
    width: ${(prop)=> prop.width ? prop.width : "100%"};
    padding-top: 30px;
    padding-bottom: 20px;
    margin: 0px;
    text-align: ${(prop)=> prop.textl ? "start" : "center"};
    padding-left: ${(prop)=> prop.textlM ? "20px" : "0px"};
`


export default Cardspan