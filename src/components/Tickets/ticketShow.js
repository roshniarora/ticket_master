import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { showTicketsByID } from '../../redux/actions/ticketAction'


const TicketShow = (props) => {
    useEffect(() => {
        props.showTicketsByID(props.match.params.id);
    }, [])
    // console.log(props && props.ticket, "idd")

    const handleClick = (id) => {
        localStorage.setItem("cust_id", id)
        // props.history.push(`/editcustomer`)
    }

    return (
        <div>
            <h1> Ticket Details </h1>
            <div> Name :  {props.ticket?.message} </div>
            <div> Email :  {props.ticket?.priority} </div>
            <div><Button onClick={() => handleClick(props.ticket?._id)}>Edit</Button> </div>


        </div>

    )
}

const mapStateToProps = (state) => ({
    ticket: state.tickets.ticketId
})
export default connect(mapStateToProps, { showTicketsByID })(TicketShow)