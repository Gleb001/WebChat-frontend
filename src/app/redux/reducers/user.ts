// import
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// type
interface InitialStateType {
    userId?: string,
    firstName?: string,
    lastName?: string,
    email?: string,
}

// constant
const initialState: InitialStateType = {
    userId: "",
    firstName: "",
    lastName: "",
    email: "",
}

// main
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        set: (
            state,
            action: PayloadAction<typeof initialState>
        ) => Object.assign(state, action.payload)
    }
});

// export
export { userSlice };
export let {set} = userSlice.actions;
export default userSlice.reducer;