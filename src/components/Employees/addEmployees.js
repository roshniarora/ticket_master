import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Formik, Field, Form } from 'formik'
import { Input, Button, Select } from 'antd'
import { postEmployeeDetails } from '../../redux/actions/employeeAction'
import { getdepartment } from '../../redux/actions/departmentAction'
import { withRouter } from 'react-router-dom'

const AddEmployee = (props) => {

    useEffect(() => {
        // console.log(props.match.params.id, "idd")
        // props.getCustomer(props.match.params.id)
        props.getdepartment();

    }, [])
    console.log(props.departments, "ADD")

    const { Option } = Select;
    return (
        <div>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    mobile: '',
                    department: ''

                }

                }
                onSubmit={values => {
                    console.log("submit", values)

                    props.postEmployeeDetails(values, props.history)
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
                        <Select defaultValue="select Department" style={{ width: "100%" }} onChange={(value) => setFieldValue("department", value)}>
                            {props.departments.map(ele => { return <Option value={ele._id}>{ele.name}</Option> })}
                        </Select>

                        <div className='mt-4 text-right'>
                            <Button htmlType="submit" type="button" > Submit </Button>
                        </div>

                    </Form>
                )}
            </Formik>



        </ div>
    )
}
const mapStateToProps = (state) => ({
    departments: state.departments.departments
})

export default connect(mapStateToProps, { postEmployeeDetails, getdepartment })(withRouter(AddEmployee))