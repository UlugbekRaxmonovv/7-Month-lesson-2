import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { dec } from '../../../context/counterSlice';
import Button from '@mui/material/Button';
import { VscChromeMinimize } from "react-icons/vsc";
import { useSelector } from 'react-redux';




const Resualt = () => {
    const count = useSelector(state => state.counter.value)

    const [name,setName] =useState('')
    const dispatch = useDispatch() 
    const  add= ()=>{
        dispatch(dec())
     setName('')

    }

    return (
        <div>
            
            <div className="input">
           <input 
           type="number"  
           value={name}
           onChange={(e) => setName(e.target.value)}
           placeholder='Son kiriting..'/>
           </div>
             <Button 
             style={{backgroundColor:'#28803C', 
             fontSize:'20px',padding:'12.5px 52px'}} 
            disabled={count <= 1}
              onClick={add}
             variant="contained"><VscChromeMinimize />
            </Button>
           
        </div>
    );
}

export default Resualt;
