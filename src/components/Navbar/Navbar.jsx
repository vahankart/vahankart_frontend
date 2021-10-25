import React from 'react'
import Slogan from './Slogan/Slogan'
import styled from 'styled-components'
import {makeStyles} from "@mui/styles"
import {ReactComponent as Logo} from './assets/Logo.svg'
import Search from './Search/Search'
import Links from './Links/Links'
import Grid from '@mui/material/Grid'

const useStyles = makeStyles({
    navbarBottom:{
        paddingTop:"10px",
    },
    navbarBottomItem:{
        alignItems: "center",
        justifyContent: "center",
    }
})


function Navbar() {

    const classes = useStyles()

    const titles = [
        {
            statement:"Car se Cart Tak.",
            color:"red"
        },
        {
            statement:"Free Delivery and Installation",
            color:"white"
        }
    ]

    const Navbar = styled.div`
        width: 100%;
        position: fixed;
        top: 0%;
        display:flex;
        flex-direction:column;
    `

    return (
        <Navbar className="navbar">
            <Slogan titles={titles}></Slogan>
            <Grid container className={classes.navbarBottom}>
                <Grid item xs className={classes.navbarBottomItem}>
                    <Logo></Logo>
                </Grid>
                <Grid item xs={6} className={classes.navbarBottomItem}>
                    <Search></Search>
                </Grid>
                <Grid item xs className={classes.navbarBottomItem}>
                    <Links></Links>
                </Grid>
            </Grid>
        </Navbar>
    )
}

export default Navbar
