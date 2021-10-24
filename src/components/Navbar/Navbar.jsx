import React from 'react'
import Slogan from './Slogan/Slogan'
import styled from 'styled-components'
import {makeStyles} from "@mui/styles"
import {ReactComponent as Logo} from './assets/Logo.svg'
import Search from './Search/Search'
import Links from './Links/Links'

const useStyles = makeStyles({
    navbarBottom:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        paddingTop:"10px",
    }
})


function Navbar() {

    const classes = useStyles()

    const Navbar = styled.div`
        width: 100%;
        position: fixed;
        top: 0%;
        display:flex;
        flex-direction:column;
    `

    return (
        <Navbar className="navbar">
            <Slogan></Slogan>
            <div className={classes.navbarBottom}>
                <Logo></Logo>
                <Search></Search>
                <Links></Links>
            </div>
        </Navbar>
    )
}

export default Navbar
