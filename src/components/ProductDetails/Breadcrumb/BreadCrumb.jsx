import React from 'react'
import styled from 'styled-components'
import {ReactComponent as Backarrow} from './Vector.svg'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
    backArrow:{
        margin:"0px 50px",
    },
    "@media screen and (max-width:480px)":{
        hiddenInMobile:{
            display:"none !important"
        }
    }
})

function BreadCrumb() {

    const classes = useStyles()

    const BreadCrumb = styled.div`
        width:100%;
        text-align:left;
        padding:2rem 0px;
        display:flex;
        flex-direction:row;
    `

    const Path = styled.div`
        width:fit-content;
    `

    return (
        <BreadCrumb className={classes.hiddenInMobile}>
            <Backarrow className={classes.backArrow} />
            <Path>
                Car Interiors / Seat Cover / PU Leather / Product Name
            </Path>

        </BreadCrumb>
    )
}

export default BreadCrumb
