import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    drawer: false,
}

const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        setDrawer: (state, action) => {
            return {
                ...state,
                drawer : action.payload
             }
        },

    }

});
export const { setDrawer } = layoutSlice.actions
export default   layoutSlice.reducer