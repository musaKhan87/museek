import { createSlice } from "@reduxjs/toolkit";

const LikedSlice=createSlice({
    name:"liked",
    initialState:[],
    reducers:{
        AddLike:(state,action)=>{
            let exist= state.find((song)=>song.songIndex===action.payload.songIndex)
            if (exist) {
                return
            } else {
                state.push(action.payload)
            }
        },
        RemoveLike: (state, action) => {
            return state.filter((song) => song.songIndex !== action.payload.songIndex)
          }          

    }
})

export const {AddLike,RemoveLike} = LikedSlice.actions
export default LikedSlice.reducer