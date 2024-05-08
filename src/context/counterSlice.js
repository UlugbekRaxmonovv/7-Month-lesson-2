import { createSlice } from '@reduxjs/toolkit'
export const counterSilce = createSlice({
    name: 'counter',
    initialState:{
        value: 1
    },
    reducers:{
        inc(state,name){
            state.value +=name.payload
        },
        dec(state){
            state.value -=1
        },
        all(state){
            state.value =0
        }
       
    }
})
export const {inc,dec,all} = counterSilce.actions
export default counterSilce.reducer