import AddressContainer from "./Addresscontainer"
import AddressParagraph from "./AddressParagraph"
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import ButtonWrapper from "../Accountinfo/Buttonwrapper"
const Address = ()=>{
    return(
        <div>
            <h1>Address Book</h1>
            <AddressContainer>
                <AddressParagraph>
                    <h3>Default Shipping Address</h3>
                    <p>Ayokunle Oriolowo</p>
                    <p>No 4 Barnawa Close, Barnawa, Kaduna</p>
                    <p>Kaduna, Kaduna</p>
                    <p>Nigeria</p>
                    <p>+234 708 568 5878</p>
                </AddressParagraph>
                <Stack spacing={5} direction="row-reverse">
                    <Button variant="text" color="error">Delete</Button>
                    <Button variant="text" color="error">Edit</Button>
                </Stack>
            </AddressContainer>
            <ButtonWrapper>
                <Button variant="contained" color="error">ADD NEW ADDRESS</Button>
            </ButtonWrapper>
        </div>
    )
}

export default Address