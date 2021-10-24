import React from 'react'
import styled from 'styled-components'
import {makeStyles} from "@mui/styles"

const useStyles = makeStyles({
    slogan:{
        width: '100%',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
})


function Slogan() {

    const classes = useStyles()

    const H2 = styled.h2`
        color: ${props => props.red? "red" : "white"};
        margin-block-start:10px;
        margin-block-end:10px;
    `
    return (
        <div className={classes.slogan}>
            <H2 red>Cart se Car Tak.</H2>     
            <H2>Free Delivery and Installation</H2>    
        </div>
    )
}

export default Slogan
