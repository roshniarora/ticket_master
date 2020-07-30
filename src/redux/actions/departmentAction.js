import axios from '../../config/axios'
import *as types from '../constant'

const departmentDispatch = (depart, data) => {
    return {
        type: depart, payload: data
    }
}

const getdepartment = () => (dispatch) => {
    axios.get('/departments')
        .then(res => {
            // console.log(res.data, 'departments')
            dispatch(departmentDispatch(types.GET_DEPARTMENTS, res.data))
        })
}


const postDepartment = (data) => (dispatch) => {
    axios.post('/departments', data)
        .then(response => {
            console.log(response.data, "post department")
            dispatch(getdepartment())
        })
}

const getDepartmentById = (id) => (dispatch) => {
    console.log(id, "redux id")
    axios.get(`/departments/${id}`)
        .then(res => {
            console.log(res.data, "show department")
            dispatch(departmentDispatch(types.GET_DEPARTMENTID, res.data))

        })
}

const editDepartment = (id, data, history) => (dispatch) => {
    axios.put(`/departments/${id}`, data)
        .then(response => {
            console.log(response.data, "put depart")
            if (response.data) return dispatch(history.push('/departments')
            )
        }).catch(err => console.log(err, "errors"))

}

const removeDepartment = (id) => (dispatch) => {
    console.log(id, "redux id")
    axios.delete(`/departments/${id}`)
        .then(res => {
            console.log(res.data, "show Customer")
            dispatch(getdepartment())
        })
}

export {
    postDepartment,
    getdepartment,
    getDepartmentById,
    removeDepartment,
    editDepartment

}