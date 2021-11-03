import styled from 'styled-components'


const AddressContainer = styled.div`
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
    width: 80%;
    height: 250px;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 5px;
    @media only screen and (max-width: 450px){
        margin: 10px;
        width: 90%;
        padding-top: 10px;
        padding-right: 0px;
    }
`

export default AddressContainer