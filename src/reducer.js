import { createSlice } from '@reduxjs/toolkit'
const detailSlice = createSlice({
    name: "detail",
    initialState: {
        details: [{
            id: 1,
            name: "mani",
            email: "mani@email.com",
            num: 944787878
        }
        ]
    },
    reducers: {
        ADD_USER: (state, { payload }) => {

            const userdetail = state.details
            userdetail.push(payload)
        },
        DEL_USER: (state,{payload}) => {
        const deldet=state.details
const balanceitems=deldet.filter(user=>user.id!==payload.id);
state.details=balanceitems
        },
        EDIT_USER: (state, { payload }) => {
            const edetail = state.details
            const edit = edetail.map(user => user.id === parseInt(payload.id) ? payload : user)
            state.details = edit
            console.log(payload)
        }
    }
}
)
export const { ADD_USER, DEL_USER, EDIT_USER } = detailSlice.actions
export default detailSlice.reducer



