import styled from 'styled-components'

const Root = styled.div`
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
    width: 18vw;
    min-width: 200px;
    max-width: 260px;
    height: 60vh;
    text-align: center;
    position: relative;
    top: 10px;
    left: 3vw;
    @media only screen and (max-width: 500px){
        display: none;
    }
`

export default Root
