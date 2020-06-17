import axios from '../../config/axios'
import *as types from '../constant'

const customerDispatch = (cust, data) => {
    return {
        type: cust, payload: data
    }
}
const getCustomer = () => (dispatch) => {
    axios.get('/customers')
        .then(res => {
            console.log(res.data, 'cusstomer')
            dispatch(customerDispatch(types.GET_CUSTOMERS, res.data))


        })

}

const postCustomerDetails = (data, history) => (dispatch) => {
    axios.post('/customers', data)
        .then(response => {
            console.log(response.data, "post Customers")
            if (response.data) return dispatch(history.push('/customers')
            )
        }).catch(err => console.log(err, "errors"))

}

const getCustomerById = (id) => (dispatch) => {
    console.log(id, "redux id")
    axios.get(`/customers/${id}`)
        .then(res => {
            console.log(res.data, "show Customer")
            dispatch(customerDispatch(types.GET_CUSTOMERSBYID, res.data))

        })
}

const deleteCustomer = (id) => (dispatch) => {
    console.log(id, "redux id")
    axios.delete(`/customers/${id}`)
        .then(res => {
            console.log(res.data, "show Customer")
            dispatch(getCustomer())
        })
}
export {
    getCustomer,
    postCustomerDetails,
    getCustomerById,
    deleteCustomer

}
