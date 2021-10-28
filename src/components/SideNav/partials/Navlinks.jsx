import styled from "styled-components"


const Navlinks = styled.div`
    height: 50px;
    justify-content: center;
    background-color: #FFFFFF;
    cursor: pointer;
    ${props => {
        if (props.top) {
            return "border-radius: 0px 0px 30px 0px;"       
        } else if(props.under) {
            return "border-radius: 0px 30px 0px 0px;"
        } else {
            return "border-radius: 0px 0px 0px 0px;"
        }
    }}
    text-align: start;
    padding-left: 20px;
`

export default Navlinks