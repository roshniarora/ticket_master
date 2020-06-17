import * as types from '../constant'


const initialState = {
    employeess: [],
    employeeId: {}

}

const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_EMPLOYEES:
            return { ...state, employeess: action.payload }
        case types.SHOW_EMPLOYEEBYID:
            return { ...state, employeeId: action.payload }
        default:
            return { ...state }
    }
}
export default employeeReducer