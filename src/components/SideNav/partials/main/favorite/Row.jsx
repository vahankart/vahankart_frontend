import styled from 'styled-components'


const CardRow = styled.div`
    display: flex;
    
    ${(prop)=>{
        if(prop.upper){
            return("height: 100px;margin-bottom: 50px;")
        } else if(prop.lower){
            return("height: 50px; justify-content: center;")
        }
    }}
`

export default CardRow