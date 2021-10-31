import styled from "styled-components";

const MainStyle = styled.div`
    width: 78vw;
    position: relative;
    top: 10px;
    left: 4vw;
    @media only screen and (max-width: 500px){
        display: block;
        width: 100vw;
        left: 0px;
    }
`

export default MainStyle