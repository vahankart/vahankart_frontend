import React from 'react';
import { SliderData } from './SliderData';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import classNames from 'classnames';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({});

const useStyles = makeStyles(() => ({

    sliderImage: {
        maxWidth: "100%",
        maxHeight: "100%",
    },
    sliderBtn: {
        overflow: "hidden",
        zIndex: "20",
        padding: ".7vw 4vw",
        border: "2px solid white",
        fontWeight: "bold",
        fontSize: "1vw",
        transitionDuration: "0.5s",
        '&:hover': {
            background: "transparent",
            border: "2px solid white",
            color: "white",
        },
        [theme.breakpoints.down('md')] : {
            fontSize: "2vw",
        },
        [theme.breakpoints.down('sm')] : {
            fontSize: "3vw",
        }
    },
    slideHeading: {
        color: "white",
        fontWeight: "bold",
        fontSize: "4vw",
        margin: "0 0",
        [theme.breakpoints.down('md')] : {
            fontSize: "6vw",
        },
        [theme.breakpoints.down('sm')] : {
            fontSize: "8vw",
        }
    },
    slideSubHeading: {
        color: "white",
        width: "35%",
        fontSize: "1vw",
        textAlign: "left",
        [theme.breakpoints.down('md')] : {
            fontSize: "2vw",
        },
        [theme.breakpoints.down('sm')] : {
            fontSize: "2vw",
        },
    },
    sliderInfo : {
        position: "absolute",
        top:"10vw",
        left: "10%",
        zIndex: 10,
        width: "fit-content",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        opacity: 1 + "!important",
        background: "transparent !important",
    },
    carouselSlide:{
        [theme.breakpoints.up('md')]:{
            '& .carousel.carousel-slider': {
                height: '40vw !important',
            },
        },
    },
}))



const ImageSlider = () => {
    const classes = useStyles();

    if (!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null;
    }

    return (
             <Carousel showThumbs={false} className={classes.carouselSlide}>
                {SliderData.map((slide, index) => {
                    return (
                            <div className={classes.SliderInfo} key={index}>
                                <img src={slide.image} alt="image" className={classes.sliderImage} />

                                <Grid container className={classNames(classes.sliderInfo, "legend")} spacing={2} direction="column">

                                    <Grid item>
                                        <h1 className={classes.slideHeading}>{slide.heading}</h1>
                                    </Grid>

                                    <Grid item>
                                        <p className={classes.slideSubHeading}>{slide.subheading}</p>
                                    </Grid>

                                    <Grid item>
                                        {(slide.button !== "" && (<button className={classes.sliderBtn}>Buy now!</button>))}   
                                    </Grid>
                                </Grid>
                                
                            </div>

                    )
                })}
            </Carousel>            
    )
}

export default ImageSlider