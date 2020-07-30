import * as types from '../constant'


const initialState = {
    tickets: [],
    ticketId: {}
}




const ticketReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TICKETS:
            return { ...state, tickets: action.payload }
        case types.SHOW_TICKETID:
            return { ...state, ticketId: action.payload }
        default:
            return { ...state }
    }
}
export default ticketReducer