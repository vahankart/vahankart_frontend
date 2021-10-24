import React from 'react'
import styled from 'styled-components'
import {makeStyles} from '@mui/styles'
import PersonIcon from '@mui/icons-material/Person'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Badge from "@mui/material/Badge"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
    linkBox:{
        width: 'fit-content',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        "& > *":{
            padding: '0px 5px',
            cursor:"pointer"
        }
    }
})

function Links() {

    const classes = useStyles() 

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.linkBox} >
            {/* For user profile page  */}
           <PersonIcon></PersonIcon>

           {/* For carts page  */}
            <Badge badgeContent={4} color="primary" >
                <ShoppingCartIcon />
            </Badge>

            {/* For more options  */}
            <Button
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{padding:"0px"}}
            >
                <MoreVertIcon/>
            </Button>

            {/* For the list of more options  */}
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Option 1</MenuItem>
                <MenuItem onClick={handleClose}>Option 2</MenuItem>
            </Menu>
        </div>
    )
}

export default Links
