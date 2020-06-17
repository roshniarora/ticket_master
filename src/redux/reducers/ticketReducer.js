import * as types from '../constant'


const initialState = {
    tickets: [],


}

const ticketReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TICKETS:
            return { ...state, tickets: action.payload }

        default:
            return { ...state }
    }
}
export default ticketReducer