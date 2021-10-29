import styled from "styled-components"


const Navlinks = styled.div`
    height: 50px;
    justify-content: center;
    cursor: pointer;
    ${props => {
        if (props.st === 'top') {
            return ("border-radius: 0px 0px 30px 0px; background-color: #FFFFFF;")       
        } else if(props.st === 'under') {
            return ("border-radius: 0px 30px 0px 0px; background-color: #FFFFFF;")
        } else if(props.st === 'active'){
            return ("border-radius: 0px 0px 0px 0px; background-color: none; color: #FFFFFF;")
        } else {
            return ("border-radius: 0px 0px 0px 0px; background-color: #FFFFFF;")
        }
    }}
    text-align: start;
    padding-left: 20px;
`

export default Navlinks