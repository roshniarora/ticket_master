import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getEmployees, deleteEmployee } from '../../redux/actions/employeeAction'


const Employees = (props) => {

    useEffect(() => {

        props.getEmployees(props.match.params.id);

    }, [])
    const handleClick = (id) => {
        props.history.push(`/employees/${id}`)
    }

    const handleDelete = (id) => {

        if (window.confirm("Are you sure to delete this item ?")) {
            return props.deleteEmployee(id)
        } else {
            return "sorry something went wrong"
        }

        // props.deleteCustomer(id)
    }
    return (
        <div>
            <h1>Employees -{props.employees.length}    <button> <Link to='/addemployee' >  Add Employee </Link> </button> </h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobilel</th>
                        <th>Department</th>
                        <th>Actions</th>
                        <th>Remove</th>

                    </tr>

                </thead>
                <tbody>
                    {

                        props?.employees?.map((ele) => {
                            return (
                                <tr>
                                    <td> {ele?._id} </td>
                                    <td> {ele?.name} </td>
                                    <td> {ele?.email} </td>
                                    <td> {ele?.mobile} </td>
                                    <td> {ele?.department?.name} </td>
                                    <td> <button onClick={() => handleClick(ele._id)} >Show</button> </td>
                                    <td>  <button onClick={() => handleDelete(ele._id)}> Remove </button> </td>





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
    employees: state.employees.employeess
})


export default connect(mapStateToProps, { getEmployees, deleteEmployee })(Employees)




