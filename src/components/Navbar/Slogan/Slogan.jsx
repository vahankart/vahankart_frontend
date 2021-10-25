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


function Slogan({titles}) {

    const classes = useStyles()

    const H2 = styled.h2`
        color: ${props => props.color};
        margin-block-start:10px;
        margin-block-end:10px;
    `
    return (
        <div className={classes.slogan}>
            {titles.map(title => <H2 color={title.color}>{title.statement}</H2> )}
        </div>
    )
}

export default Slogan
