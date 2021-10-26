import React, { useState } from 'react'
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
    const [searchValue, setSearchValue] = useState('')

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
            <SearchOutlinedIcon className={classes.icon} />
            <Input 
                className={classes.input} 
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                disableUnderline
                placeholder={"Search Accessories..."}
            />
            <MicNoneOutlinedIcon className={classes.icon} />
            <span className={classes.scanner} >
                <PhotoCameraOutlinedIcon className={classes.icon} />
            </span>
        </Search>
    )
}

export default Search
