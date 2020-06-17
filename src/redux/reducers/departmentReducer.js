import * as types from '../constant'


const initialState = {
    departments: [],
    departmentById: {}
}

const departmentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_DEPARTMENTS:
            return { ...state, departments: action.payload }
        case types.GET_DEPARTMENTID:
            return { ...state, departmentById: action.payload }


        default:
            return { ...state }
    }
}
export default departmentsReducer