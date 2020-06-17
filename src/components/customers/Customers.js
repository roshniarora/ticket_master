import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCustomer, deleteCustomer } from '../../redux/actions/customerAction'
import './Customers.css'

const Customers = (props) => {
    useEffect(() => {
        // console.log(props.match.params.id, "idd")
        // props.getCustomer(props.match.params.id)
        props.getCustomer(props.match.params.id);

    }, [])
    // console.log(props.Customer, "data")
    const handleClick = (id) => {
        props.history.push(`/customers/${id}`)
    }

    const handleDelete = (id) => {

        if (window.confirm("Are you sure to delete this item ?")) {
            return props.deleteCustomer(id)
        } else {
            return "sorry something went wrong"
        }

        // props.deleteCustomer(id)
    }
    return (
        <div>
            <h1> Customers - {props.customers.length} <button> <Link to='/users/addcustomers' >  Add Customers </Link> </button> </h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobilel</th>
                        <th>Actions</th>
                        <th>Remove</th>

                    </tr>

                </thead>
                <tbody>
                    {

                        props.customers.map((ele) => {
                            return (
                                <tr>
                                    <td> {ele._id} </td>
                                    <td> {ele.name} </td>
                                    <td> {ele.email} </td>
                                    <td> {ele.mobile} </td>
                                    <td> {ele.action}<button onClick={() => handleClick(ele._id)}>Show</button> </td>
                                    <td> {ele.remove}  <button onClick={() => handleDelete(ele._id)}> Remove </button> </td>
                                </tr>
                            )
                        })
                    }

                </tbody>



            </table>
        </div>

    )
}

const mapStateToProps = (state) => ({
    customers: state.customers.customers
})


export default connect(mapStateToProps, { getCustomer, deleteCustomer })(Customers)




