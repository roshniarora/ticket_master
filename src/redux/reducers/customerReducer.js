import * as types from '../constant'


const initialState = {
    customers: [],
    customersId: {}
}

const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_CUSTOMERS:
            return { ...state, customers: action.payload }
        case types.GET_CUSTOMERSBYID:
            return { ...state, customersId: action.payload }

        default:
            return { ...state }
    }
}
export default customerReducer