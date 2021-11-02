import React from 'react'
// import styled from 'styled-components'
import {makeStyles} from '@mui/styles'
import PersonIcon from '@mui/icons-material/Person'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Badge from "@mui/material/Badge"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles({
    linkBox:{
        width: 'fit-content',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems:'center',
        marginTop: '10px',
        "& > *":{
            padding: '0px 5px',
            cursor:"pointer",
            "& > svg":{
                verticalAlign: 'middle'
            }
        }
    },
    customBadge: {
        backgroundColor: "#E51515",
        color: "white"
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
        <Grid 
            container 
            className={classes.linkBox} 
            direction="row"
            justifyContent="center"
            alignItems="center" 
        >
            {/* For user profile page  */}
            <Grid item xs={2}>
                <PersonIcon />
            </Grid>

           {/* For carts page  */}
           <Grid item xs={1}>
                <Badge 
                    badgeContent={4} 
                    classes={{ badge: classes.customBadge }}
                >
                    <ShoppingCartIcon />
                </Badge>
           </Grid>

            {/* For more options  */}
            <Grid item xs={1}>
                <Button
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    style={{padding:"0px"}}
                >
                    <MoreVertIcon/>
                </Button>
            </Grid>

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
        </Grid>
    )
}

export default Links
