import React,{useState} from 'react';
import { inc } from '../../../context/counterSlice';
import { useDispatch} from 'react-redux';
import Button from '@mui/material/Button';
import { VscAdd } from "react-icons/vsc";
import './Main.css'

const Main = () => {
    const dispatch = useDispatch() 
    const[ name,setName] = useState('')
    const handleIncrement = () => {  
 if(name !== ''){
    dispatch
    dispatch(inc(parseInt(name)))
    setName
    setName('')
  }

    }
    return (
        <div>
          <div className="input">
           <input type="number" 
           value={name}
           onChange={(e) => setName(e.target.value)}
            placeholder='Son kiriting..'/>
           </div>
            <Button style={{backgroundColor:'#28803C',fontSize:'20px',padding:'12.5px 52px'}} 
            onClick={handleIncrement } 
             variant="contained"><VscAdd />
            </Button>
        </div>
    );
}

export default Main;
