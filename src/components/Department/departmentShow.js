import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getDepartmentById } from '../../redux/actions/departmentAction'

const DepartmentShow = (props) => {


    useEffect(() => {
        props.getDepartmentById(props.match.params.id);
    }, [])
    // console.log(props && props.id, "idd")

    return (
        <div>
            <h1> Department Details </h1>
            <div> Name :  {props.department?.name} </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    department: state.departments.departmentById
})
export default connect(mapStateToProps, { getDepartmentById })(DepartmentShow)