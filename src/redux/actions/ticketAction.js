import axios from '../../config/axios'
import *as types from '../constant'

const ticketDispatch = (ticks, data) => {
    return {
        type: ticks, payload: data
    }
}

const getTickets = () => (dispatch) => {
    axios.get('/tickets')
        .then(res => {
            console.log(res.data, 'ticket')
            dispatch(ticketDispatch(types.GET_TICKETS, res.data))
        }).catch(err => console.log(err, "errors"))

}

const postTickets = (data, history) => (dispatch) => {
    axios.post('/tickets', data)
        .then(response => {
            console.log(response.data, "post ticket")
            if (response.data) return dispatch(history.push('/tickets')
            )
        }).catch(err => console.log(err, "errors"))
}

export {
    getTickets,
    postTickets

}