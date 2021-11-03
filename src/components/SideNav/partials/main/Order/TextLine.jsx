import styled from 'styled-components'


const TextLine = styled.p`
    margin: 0;
    color: ${(prop)=> prop.color ? prop.color : "#000000"};
    font-size: ${(prop)=> prop.size ? prop.size : "medium"};
    height: 20px;
`

export default TextLine