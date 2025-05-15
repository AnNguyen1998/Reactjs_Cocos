import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    projects:[],
    status:'start',
    error:null
}

const url = 'http://localhost:3000/api/projects/'
export const fetchProjects = createAsyncThunk("tasks/fetchProjects", async ()=>{
    const response = await axios.get(url)
    return response.data
})

const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProjects.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(fetchProjects.fulfilled,(state, action)=>{
            state.projects = action.payload;
        })
        .addCase(fetchProjects.rejected,(state, action)=>{
            state.error = action.error.message;
        })
    }
})

export const {} = projectSlice.actions
export default projectSlice.reducer