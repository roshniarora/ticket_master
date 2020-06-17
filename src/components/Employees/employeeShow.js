import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { showEmployee } from '../../redux/actions/employeeAction'

const EmployeeShow = (props) => {
    useEffect(() => {
        props.showEmployee(props.match.params.id);
    }, [])
    console.log(props && props.id, "idd")

    return (
        <div>
            <h1> Employees Details </h1>
            <div> Name :  {props.employees?.name} </div>
            <div> Email :  {props.employees?.email} </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    employees: state.employees.employeeId
})

export default connect(mapStateToProps, { showEmployee })(EmployeeShow)