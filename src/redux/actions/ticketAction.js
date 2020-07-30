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

const showTicketsByID = (id) => (dispatch) => {
    console.log(id, "redux id")
    axios.get(`/tickets/${id}`)
        .then(res => {
            console.log(res.data, "show ticket")
            dispatch(ticketDispatch(types.SHOW_TICKETID, res.data))

        })
}

const deleteTicket = (id) => (dispatch) => {
    console.log(id, "redux id")
    axios.delete(`/tickets/${id}`)
        .then(res => {
            console.log(res.data, "delete ticket")
            dispatch(getTickets())
        })
}

export {
    getTickets,
    postTickets,
    showTicketsByID,
    deleteTicket

}