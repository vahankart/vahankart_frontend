import { Link } from "react-router-dom"
import InputGroup from "./InputGroup"
import Wrapper from "./wrapper"
import InputLabel from "./InputLabel"
import InputTag from "./InputTag"
import InputSelect from "./InputSelect"
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from "@mui/material/Button"
import ButtonWrapper from "./Buttonwrapper"
const AccountInfo = ()=>{
    return(
        <div style={{justifyContent: 'center'}}>
            <h1>User Information</h1>
            <Wrapper>
                <InputGroup>
                    <InputLabel>First name</InputLabel>
                    <InputTag type="text" />
                </InputGroup>
                <InputGroup>
                    <InputLabel>Last name</InputLabel>
                    <InputTag type="text" />
                </InputGroup>
                <InputGroup>
                    <InputLabel>Email</InputLabel>
                    <InputTag type="email" />
                </InputGroup>
                <InputGroup>
                    <InputLabel>Gender</InputLabel>
                    <InputSelect name="gender">
                        <option>select an opton ---</option>
                        <option>Male</option>
                        <option>Female</option>
                    </InputSelect>
                </InputGroup>
                <InputGroup>
                    <InputLabel>Date of birth</InputLabel>
                    <InputTag type="date" />
                </InputGroup>
                <InputGroup>
                    <Link style={{color: '#E51515', textDecoration: 'none'}} to="/#">Change password</Link>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked color="error"/>} label="Newsletter subsciption"/>
                    </FormGroup>
                </InputGroup>
            </Wrapper>
            <ButtonWrapper>
                <Button variant="contained" color="error">save changes</Button>
            </ButtonWrapper>
        </div>
    )
}


export default AccountInfo