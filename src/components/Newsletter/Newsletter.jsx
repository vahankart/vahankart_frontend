import { Input } from '@mui/material';
import React from 'react';

function Newsletter({classes}) {

    return (
        <div className={classes.email}>
            <Input 
                className={classes.input} 
                placeholder="Email Address" 
                disableUnderline
            />
            <button className="okBtn">OK</button>
        </div>
    )
}

export default Newsletter