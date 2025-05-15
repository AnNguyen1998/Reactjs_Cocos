import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    tasks:[],
    status:'start',
    error:null
}

const url = ''
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async ()=>{
    const response = await axios.get(url)
    return response.data
})

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchTasks.pending,(state)=>{
            state.status = 'loading'
        })
    }
})

export const {} = taskSlice.actions
export default taskSlice.reducer