import React from 'react';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';

const Navbar = () => {
    const count = useSelector(state => state.counter.value)
    return (
        <div>
            <Button
             style={{backgroundColor:'#FBCECB',fontSize:'20px',padding:'6px 52px'}
            } 
             variant="contained" >{count}
            </Button>
        </div>
    );
}

export default Navbar;
