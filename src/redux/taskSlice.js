import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    tasks:[],
    status:'start',
    error:null
}

const url = 'http://localhost:3000/api/tasks/'
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
        .addCase(fetchTasks.fulfilled,(state, action)=>{
            state.tasks = action.payload;
        })
        .addCase(fetchTasks.rejected,(state, action)=>{
            state.error = action.error.message;
        })
    }
})

export const {} = taskSlice.actions
export default taskSlice.reducer