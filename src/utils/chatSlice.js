import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
    name:"chat",
    initialState : {
        messages : []
    },
    reducers: {
        addChat : (state,actions)=> {
            state.messages.splice(LIVE_CHAT_COUNT,1)
            state.messages.unshift(actions.payload)
        }
    }
})

export const {addChat} = chatSlice.actions;
export default chatSlice.reducer;