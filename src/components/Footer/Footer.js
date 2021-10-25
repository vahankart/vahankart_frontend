// import { dividerClasses } from '@mui/material'
import React from 'react';
import './Footer.css';
import logoImg from './images/logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {makeStyles} from '@mui/styles';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Grid, ListItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// Style variable 
const dark = '#16181B'
const red = '#E51515'

const useStyles = makeStyles(theme => ({
    footer : {
        boxSizing: 'border-box',
        padding: '0',
        margin: '0',
        position: "fixed",
        bottom: 0,
        left: 0,
        width: '100%',
        color: "#ffffff",
        backgroundColor: dark,
        fontFamily: "Open Sans",
        fontSize: 14
    },

    links : {
        textDecoration: "none",
        color: "#ffffff",
        '&:hover' : {
            color: "rgb(165, 165, 165)"
        }
    },

    fgrid : {
        justifySelf: "center",
        alignSelf: "center",
        padding: "20px"
    },

    logoImage : {
        width: '271px',
        height: '57px'
    },

    socials : {
        '& div' : {
            alignSelf: "center",
            justifySelf: "center",
            margin: "10px"
        }
    },

    email : {
        marginTop: '15px',
        '& input' : {
            backgroundColor: dark,
            color: "#ffffff",
            outline: "none",
            padding: "15px",
            border: `2px solid ${red}`,
            borderRadius: "7px 0px 0px 7px",
            width: "60%"
        },

        '& input::placeholder' : {
            color: "#ffffff"
        },

        '& input:focus::placeholder' : {
            color: "transparent"
        },

        '& button' : {
            backgroundColor: red,
            color: '#ffffff',
            outline: 'none',
            padding: '15px 25px',
            cursor: 'pointer',
            border: `2px solid ${red}`,
            borderRadius: '0px 7px 7px 0px'
        }
    },

    info : {
        marginLeft : "20px"
    },

    icons : {
        color: `${red}`
    }

}))

const Footer = () => {
    const classes = useStyles();

    const socialLinks = [
        {
            icon : <FacebookIcon className={classes.icons} />,
            name : 'Facebook',
            link : '#'
        },
        {
            icon : <TwitterIcon className={classes.icons}/>,
            name : 'Twitter',
            link : '#'
        },
        {
            icon : <InstagramIcon className={classes.icons}/>,
            name : 'Instagram',
            link : '#'
        }
    ]

    return (
        <Grid container className={classes.footer} spacing={0}>

            {/* Logo section */}
            <Grid item spacing={2} className={classes.fgrid} xs={12} md={12} lg={4}>
                <img className={classes.logoImage} src={logoImg} alt="logo" />
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facilis, dicta excepturi odio corporis commodi alias est! Nulla, vitae magni?</ Typography>
                </Grid>

            {/* Social links section */}
            <Grid item spacing={2} className={classes.socials} className={classes.fgrid} xs={12} md={6} lg={2}>
                <List>
                    {socialLinks.map(item => (
                        <ListItem>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <Link className={classes.links} to={item.link}>{item.name}</Link>  
                        </ListItem>
                    ))}                       
                </List>
            </Grid>

            {/* Contact section  */}
            <Grid item spacing={2} className={classes.fgrid} xs={12} md={6} lg={3}>
                <Link className={classes.links} to="#">Subscribe to our newsletter</ Link>
                <div className={classes.email}>
                    <input type="email" name="email" id="" placeholder="Email Address"/>
                    <button className="okBtn">OK</button>
                </div>
            </Grid>

            {/* Info section */}
            <Grid item spacing={2} className={classes.info} className={classes.fgrid} xs={12} md={12} lg={3}>
                <Link className={classes.links} to="#">Subscribe to our newsletter</ Link>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi excepturi mollitia non impedit enim provident obcaecati nemo perferendis libero repellat.</Typography>
            </Grid>
        </Grid>
    )
}

export default Footer