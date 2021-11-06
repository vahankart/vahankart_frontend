import React, { useState } from 'react';
import { SliderData } from './SliderData';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import FiberManualRecordTwoToneIcon from '@mui/icons-material/FiberManualRecordTwoTone';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
// import { keyframes } from '@mui/system';


const useStyles = makeStyles(theme => ({
    slider: {
        position: "relative",
        height: "70vh",
        width: "60vw",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        overflow: "hidden"
    },
    sliderImage: {
        maxWidth: "100%",
        maxHeight: "100%",
    },
    rightArrow: {
        position: "absolute",
        top: "50%",
        right: "1rem",
        fontSize: "3rem",
        color: "#000",
        cursor: "pointer",
        zIndex: "10",
        userSelect: "none",
        color: "white"
    },
    leftArrow: {
        position: "absolute",
        top: "50%",
        left: "1rem",
        fontSize: "3rem",
        color: "#000",
        cursor: "pointer",
        zIndex: "10",
        userSelect: "none",
        color: "white"
    },
    '@keyframes FadeOut': {
        "0%": {
            opacity: 1,
            transitionDuration: "1s",
        },
        "100%": {
            opacity: 0,
            transitionDuration: "1s",
        }
    },
    '@keyframes FadeIn': {
        "0%": {
            opacity: 0,
        },
        "100%": {
            opacity: 1,
        }
    },
    activeSlide: {
        animation: "$FadeIn .5s ease-in",
    },
    slide: {
        animation: "FadeOut .5s ease-out",
    },
    containerDots: {
        position: "absolute",
        bottom: "10px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        color: "white",
        '& div svg': {
            width: "0.7em",
            height: "0.7em"
        }
    },
    sliderBtn: {
        overflow: "hidden",
        position: "absolute",
        zIndex: "20",
        top: "67%",
        left: "10%",
        padding: "1rem 4rem",
        border: "2px solid white",
        fontWeight: "bold",
        transitionDuration: "0.5s",
        '&:hover': {
            background: "transparent",
            border: "2px solid white",
            color: "white",
        }
    },
    slideHeading: {
        position: "absolute",
        zIndex: "10",
        top: "30%",
        color: "white",
        left: "10%",
        fontWeight: "bold"
    },
    slideSubHeading: {
        position: "absolute",
        zIndex: "10",
        top: "45%",
        left: "10%",
        color: "white",
        width: "35%",
        fontSize: "13px"
    }
}))

const ImageSlider = () => {
    const classes = useStyles();
    const [current, setCurrent] = useState(0);
    const length = SliderData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    const moveDot = (index) => {
        setCurrent(index);
    }

    if (!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null;
    }

    return (
        <div className={classes.slider}>
            <NavigateBeforeIcon className={classes.leftArrow} onClick={prevSlide} />
            <NavigateNextIcon className={classes.rightArrow} onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    index === current && (
                        <div className={index === current ? classes.activeSlide : classes.slide} key={index}>
                            <img src={slide.image} alt="image" className={classes.sliderImage} />

                            <Typography
                                className={classes.slideHeading}
                                variant="h2"
                                gutterBottom
                                component="div"
                            >
                                {slide.heading}
                            </Typography>

                            <Typography
                                className={classes.slideSubHeading}
                            >
                                {slide.subheading}
                            </Typography>

                            {(slide.button !== "" && (
                                <button className={classes.sliderBtn}>Buy now!</button>
                            ))
                            }
                        </div>
                    )

                )
            })}
            <div className={classes.containerDots}>
                {Array.from({ length: SliderData.length }).map((item, index) => (
                    <div
                        key={index}
                        onClick={() => moveDot(index)}
                    >
                        {current === index ? <FiberManualRecordIcon /> : <FiberManualRecordTwoToneIcon />}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageSlider