import React from 'react';

export default function SuccessWrapper(){
    const [open, setOpen] = React.useState(false);
    const handleClick =() => {
        setOpen(true);
    }

    return(
        <span onClick={handleClick}></span>
    );
}