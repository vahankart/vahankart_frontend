import React,{useState} from 'react'
import {makeStyles} from '@mui/styles'
import styled from 'styled-components'
import Grid from '@mui/material/Grid';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const useStyles = makeStyles({
    allImages:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-evenly",
        alignItems:"flex-end"
    },
    allImagesItem:{
        width:"40%",
        height:"auto",
        margin:"7px 0px"

    },
    selectedImageContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        height:"100%",
        padding:"20px 0px"
    },
    selectedImage:{
        width:"300px",
        height:"auto",
        marginLeft:"50%"
    },
    carousel:{
        width:"100%",
    },
    visibleInMobile:{
        display:"none"
    },
    "@media screen and (max-width:480px)":{
        hiddenInMobile:{
            display:"none !important"
        },
        visibleInMobile:{
            display:"block"
        }
    }
})

function ImageSection() {

    const classes = useStyles()

    const ImageSection = styled.div`
        background: #00000033;
        width:100%;
        height:fit-content;
    `

    //An array of the link of images
    const [Images,setImages] = useState([
        "https://cdn.pixabay.com/photo/2017/04/06/22/11/car-2209439_960_720.png",
        "https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-4322521_960_720.jpg",
        "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_960_720.jpg",
        "https://cdn.pixabay.com/photo/2017/08/22/00/27/car-dashboard-2667434_960_720.jpg"
    ])

    //Image to be shown as main
    const [selectedImage,setSelectedImage] = useState(0)

    const handleSelect=(e)=>{
        setSelectedImage(e.target.id)
    }

    return (
        <ImageSection>
            <Grid container className={classes.hiddenInMobile} >
                <Grid item lg={6}>
                    <span className={classes.allImages}>
                        {Images.map((url,index)=>
                            <img src={url} alt={url} onClick={handleSelect} id={index} className={classes.allImagesItem} />
                        )}
                    </span>
                </Grid>
                <Grid item lg={4}>
                    <span className={classes.selectedImageContainer}>  
                        <img src={Images[selectedImage]} className={classes.selectedImage} />
                    </span>
                </Grid>
            </Grid>
            <Carousel className={classes.visibleInMobile}>
                {Images.map(image=><div><img src={image} alt={image}/></div>)}
            </Carousel>
        </ImageSection>
    )
}

export default ImageSection
