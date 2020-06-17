import axios from '../../config/axios'
import *as types from '../constant'

const employeeDispatch = (cust, data) => {
    return {
        type: cust, payload: data
    }
}

const getEmployees = () => (dispatch) => {
    axios.get('/employees')
        .then(res => {
            // console.log(res.data, 'employ')
            dispatch(employeeDispatch(types.GET_EMPLOYEES, res.data))
        }).catch(err => {
            console.log(err)
        })

}


const postEmployeeDetails = (data, history) => (dispatch) => {
    axios.post('/employees', data)
        .then(response => {
            console.log(response.data, "post employee")
            if (response.data) return (dispatch(history.push('/employees'), dispatch(getEmployees()))
            )
        }).catch(err => console.log(err, "errors"))

}

const showEmployee = (id) => (dispatch) => {
    console.log(id, "redux id")
    axios.get(`/employees/${id}`)
        .then(res => {
            console.log(res.data, "show employee")
            dispatch(employeeDispatch(types.SHOW_EMPLOYEEBYID, res.data))

        })
}

const deleteEmployee = (id) => (dispatch) => {
    console.log(id, "redux id")
    axios.delete(`/employees/${id}`)
        .then(res => {
            console.log(res.data, "delete employee")
            dispatch(getEmployees())
        })
}


export {
    getEmployees,
    postEmployeeDetails,
    showEmployee,
    deleteEmployee


}