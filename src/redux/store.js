import {configureStore} from '@reduxjs/toolkit'
import taskSlice from './taskSlice'
import projectSlice from './projectSlice'

const store = configureStore({
    reducer:{
        tasks: taskSlice,
        projects: projectSlice,
    }
})
export default store    