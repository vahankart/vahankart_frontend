import React from 'react'
import styled from 'styled-components'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import Input from '@mui/material/Input';
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
    input:{
        width: '90%'
    },
    icon:{
        verticalAlign:"middle",
        padding:"0px 5px",
        cursor:"pointer"
    },
    scanner:{
        padding:"5px",
        borderLeft:"1px solid black"
    }
})


function Search() {

    const classes = useStyles()

    const Search = styled.div`
        height:40px;
        padding:3px;
        border:1px solid black;
        display:flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    `

    return (
        <Search>
            <SearchOutlinedIcon className={classes.icon} ></SearchOutlinedIcon>
            <Input 
                className={classes.input} 
                disableUnderline
                placeholder={"Search Accessories..."}
            ></Input>
            <MicNoneOutlinedIcon className={classes.icon} ></MicNoneOutlinedIcon>
            <span className={classes.scanner} >
                <PhotoCameraOutlinedIcon className={classes.icon} ></PhotoCameraOutlinedIcon>
            </span>
        </Search>
    )
}

export default Search
