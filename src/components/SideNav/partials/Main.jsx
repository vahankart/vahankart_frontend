import styled from "styled-components";

const Main = styled.div`
    /* background-color: red; */
    width: 75vw;
    position: relative;
    top: 10px;
    left: 4vw;
    @media only screen and (max-width: 500px){
        display: block;
        width: 100vw;
        left: 0px;
    }
`

export default Main