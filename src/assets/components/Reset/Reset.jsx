import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import {all} from '../../../context/counterSlice'


const Reset = () => {
    const dispatch = useDispatch() 
    return (
        <div>
             <Button style={{backgroundColor:'#28803C',fontSize:'20px',padding:'12.5px 52px',marginLeft:'28%', marginTop:'40px'}} 
            onClick={() =>  dispatch(all())} 
             variant="contained"> Reset
            </Button>
        </div>
    );
}

export default Reset;
