import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { getCustomerById } from '../../redux/actions/customerAction'


const CustomerShow = (props) => {
    useEffect(() => {
        props.getCustomerById(props.match.params.id);
    }, [])
    console.log(props && props.id, "idd")

    const handleClick = (id) => {
        localStorage.setItem("cust_id", id)
        props.history.push(`/editcustomer`)
    }

    return (
        <div>
            <h1> Customer Details </h1>
            <div> Name :  {props.customers?.name} </div>
            <div> Email :  {props.customers?.email} </div>
            <div><Button onClick={() => handleClick(props.customers?._id)}>Edit</Button> </div>


        </div>

    )
}

const mapStateToProps = (state) => ({
    customers: state.customers.customersId
})
export default connect(mapStateToProps, { getCustomerById })(CustomerShow)