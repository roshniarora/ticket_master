import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Formik, Field, Form } from 'formik'
import { Input, Button, Select } from 'antd'
// import { postEmployeeDetails } from '../../redux/actions/employeeAction'
import { getdepartment } from '../../redux/actions/departmentAction'
import { showEmployee, editEmployee } from '../../redux/actions/employeeAction'
import { withRouter } from 'react-router-dom'

const EditEmployee = (props) => {
    useEffect(() => {
        props.getdepartment()
        const id = localStorage.getItem("employee_id")
        props.showEmployee(id)
    }, [])

    console.log(props.employees.department && props.employees?.department.name, "ADD")

    const { Option } = Select;
    return (
        <div>

            <Formik
                initialValues={{
                    name: props.employees?.name || '',
                    email: props.employees?.email || '',
                    mobile: props.employees?.mobile || '',
                    department: props.employees?.department?._id || ''

                }

                }
                enableReinitialize
                onSubmit={values => {
                    console.log("submit", values)
                    props.editEmployee(localStorage.getItem("employee_id"), values, props.history)
                }}
            >

                {({ handleSubmit, setFieldValue }) => (

                    <Form onSubmit={handleSubmit}>

                        <label>Name</label>
                        <Field name='name' as={Input} placeholder=" UserName" />

                        <label>Email</label>
                        <Field name="email" as={Input} placeholder="Email" />


                        <label>Mobile</label>
                        <Field name="mobile" as={Input} placeholder="mobile" />

                        <label>Department</label>
                        <Select
                            // optionLabelProp={props.employees.department && props.employees.department.name}
                            // labelInValue
                            defaultValue={props.employees?.department?._id}
                            placeholder="select"
                            style={{ width: "100%" }} onChange={(value) => setFieldValue("department", value)}>
                            {props.departments.map(ele => { return <Option value={ele._id}>{ele.name}</Option> })}
                        </Select>

                        <div className='mt-4 text-right'>
                            <Button htmlType="submit" type="button" > Submit </Button>
                        </div>

                    </Form>
                )}
            </Formik>



        </ div >
    )
}
const mapStateToProps = (state) => ({
    employees: state.employees.employeeId,
    departments: state.departments.departments
})

export default connect(mapStateToProps, { getdepartment, editEmployee, showEmployee })(withRouter(EditEmployee))