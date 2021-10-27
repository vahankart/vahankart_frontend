import { Input } from '@mui/material';
import React, { useState } from 'react';

function Newsletter({classes}) {
    const [Email, setEmail] = useState("")

    return (
        <div className={classes.email}>
            <Input 
                className={classes.input} 
                placeholder="Email Address" 
                disableUnderline
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button className="okBtn">OK</button>
        </div>
    )
}

export default Newsletter