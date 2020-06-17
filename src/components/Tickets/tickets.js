import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Tooltip, Progress, Checkbox } from 'antd';
import { getTickets } from '../../redux/actions/ticketAction'
import { connect } from 'react-redux';

const Ticket = (props) => {

    useEffect(() => {
        // console.log(props.match.params.id, "idd")
        // props.getCustomer(props.match.params.id)
        props.getTickets();

    }, [])

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }
    console.log(props.tickets, "tickets")
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

                        </tr>

                    </thead>
                    <tbody>
                        {

                            props.tickets?.map((ele) => {
                                return (
                                    <tr>
                                        <td> {ele?._id} </td>
                                        <td> {ele?.code} </td>
                                        <td> {ele?.customer} </td>
                                        <td> {ele?.department} </td>
                                        <td> {ele?.employees} </td>
                                        <td> {ele?.message} </td>
                                        <td> {ele?.priority} </td>
                                        <td> <button >Show</button> </td>
                                        <td>    <button > Remove </button> </td>
                                        <Checkbox onChange={onChange}>Checkbox</Checkbox>





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
    ticket: state.tickets.tickets
})

export default connect(mapStateToProps, { getTickets })(Ticket)