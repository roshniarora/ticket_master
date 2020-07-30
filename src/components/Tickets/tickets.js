import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Tooltip, Progress, Checkbox } from 'antd';
import { getTickets, deleteTicket } from '../../redux/actions/ticketAction'
import { getdepartment } from '../../redux/actions/departmentAction'
import { getCustomer } from '../../redux/actions/customerAction'
import { getEmployees } from '../../redux/actions/employeeAction'
import { connect } from 'react-redux';

const Ticket = (props) => {


    useEffect(() => {

        props.getdepartment()
        props.getCustomer()
        props.getEmployees()
        props.getTickets()

    }, [])
    // console.log(props.ticket, "tickets")

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }

    const handleClick = (id) => {
        props.history.push(`/tickets/${id}`)
    }

    const handleDelete = (id) => {

        if (window.confirm("Are you sure to delete this item ?")) {
            return props.deleteTicket(id)
        } else {
            return "sorry something went wrong"
        }

        // props.deleteCustomer(id)
    }

    const findCustomers = (id) => {
        const data = props.customers.find(ele => ele._id === id)
        return data?.name
    }

    const findDepartment = (id) => {
        const data = props.departments.find(ele => ele._id === id)
        return data?.name
    }

    const findEmployee = (id) => {
        // console.log(empId.map(ele => ele), "ids")
        const data = props.employees.find(ele => ele._id === id)
        //  = empName.map(ele => ele.name)
        console.log(data?.name, "data")
        return `${data?.name} `
    }

    return (

        <div>
            <div>
                <h1>   <button> <Link to='/addtickets' >  Add Ticket </Link> </button> </h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Code</th>
                            <th>Customer</th>
                            <th>Department</th>
                            <th>Employees</th>
                            <th>Message</th>
                            <th>Priority</th>
                            <th>Action</th>
                            <th>Remove</th>
                            <th>Complete</th>

                        </tr>

                    </thead>
                    <tbody>
                        {
                            props.ticket?.map((ele) => {
                                // findCustomers(ele.customer)
                                return (
                                    <tr>
                                        <td> {ele?._id} </td>
                                        <td> {ele?.code} </td>
                                        <td> {findCustomers(ele.customer)} </td>
                                        <td> {findDepartment(ele.department)} </td>
                                        <td> {ele.employees.map(ele => findEmployee(ele._id))} </td>
                                        <td> {ele?.message} </td>
                                        <td> {ele?.priority} </td>
                                        <td> <button onClick={() => handleClick(ele._id)} >Show</button> </td>
                                        <td>    <button onClick={() => handleDelete(ele._id)} > Remove </button> </td>
                                        <td><Checkbox onChange={onChange}>Checkbox</Checkbox> </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>


                    <Progress>
                        <Progress percent={30} />
                        <Progress percent={50} status="active" />
                        <Progress percent={70} status="exception" />
                        <Progress percent={100} />
                        <Progress percent={50} showInfo={false} />
                    </Progress>

                    <>
                        <Tooltip title="3 done / 3 in progress / 4 to do">
                            <Progress percent={60} successPercent={30} />
                        </Tooltip>

                        <Tooltip title="3 done / 3 in progress / 4 to do">
                            <Progress percent={60} successPercent={30} type="circle" />
                        </Tooltip>

                        <Tooltip title="3 done / 3 in progress / 4 to do">
                            <Progress percent={60} successPercent={30} type="dashboard" />
                        </Tooltip>
                    </>,



                </table>
            </div>


        </div >
    )
}

const mapStateToProps = (state) => ({
    ticket: state.tickets.tickets,
    departments: state.departments.departments,
    customers: state.customers.customers,
    employees: state.employees.employeess
})

export default connect(mapStateToProps, { getTickets, deleteTicket, getdepartment, getCustomer, getEmployees })(Ticket)