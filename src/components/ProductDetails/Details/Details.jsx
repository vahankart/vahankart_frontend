import React from 'react'
import ImageSection from './ImageSection/ImageSection'
import InfoSection from './InfoSection/InfoSection'
import Grid from '@mui/material/Grid';

function Details() {
    return (
        <Grid container>
            <Grid item lg={5} md={12}>
                <ImageSection></ImageSection>
            </Grid>
            <Grid item lg={7} md={12}>
                <InfoSection></InfoSection>
            </Grid>
        </Grid>
    )
}

export default Details
