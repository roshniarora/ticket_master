import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Formik, Field, Form } from 'formik'
import { Input, Button, Select, Radio } from 'antd'
import { getdepartment } from '../../redux/actions/departmentAction'
import { getCustomer } from '../../redux/actions/customerAction'
import { getEmployees } from '../../redux/actions/employeeAction'
import { postTickets } from '../../redux/actions/ticketAction'
import { withRouter } from 'react-router-dom'

const AddTicket = (props) => {

    useEffect(() => {

        props.getdepartment()
        props.getCustomer()
        props.getEmployees()

    }, [])
    console.log(props.departments, "ADD")
    const { TextArea } = Input;
    const { Option } = Select;

    const children = []
    props.employees && props.employees.map(ele => { children.push(<Option value={ele._id}>{ele.name}</Option>) })
    return (
        <div>
            <h1> Add Ticket Here </h1>

            <Formik
                initialValues={{
                    code: '',
                    customer: '',
                    department: '',
                    employees: [],
                    message: '',
                    priority: '',



                }

                }
                onSubmit={values => {
                    console.log("submit", values)

                    props.postTickets(values, props.history)
                }}
            >

                {({ handleSubmit, setFieldValue }) => (

                    <Form onSubmit={handleSubmit}>

                        <label>Code</label>
                        <Field name='code' as={Input} placeholder=" code" />

                        <label>Customer</label>
                        <Select defaultValue="select customer" style={{ width: "100%" }} onChange={(value) => setFieldValue("customer", value)}>
                            {props.customers.map(ele => { return <Option value={ele._id}>{ele.name}</Option> })}
                        </Select>


                        <label>Department</label>
                        <Select defaultValue="select Department" style={{ width: "100%" }} onChange={(value) => setFieldValue("department", value)}>
                            {props.departments.map(ele => { return <Option value={ele._id}>{ele.name}</Option> })}
                        </Select>

                        <label>Employee</label>
                        <Select placeholder="select Department" mode="multiple" style={{ width: "100%" }} onChange={(value) => setFieldValue("employees", { _id: value })}>
                            {children}
                        </Select>

                        <label>Message</label>
                        <Field name='message' as={TextArea} placeholder=" Message" />

                        <label>Priority</label> <br />

                        <Radio.Group name="radiogroup" onChange={value => setFieldValue('priority', value.target.value)} >
                            <Radio value="high">High</Radio> <br />
                            <Radio value="medium">Medium</Radio> <br />
                            <Radio value="low">Low</Radio><br />
                        </Radio.Group>

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
    departments: state.departments.departments,
    customers: state.customers.customers,
    employees: state.employees.employeess
})

export default connect(mapStateToProps, { getdepartment, getCustomer, getEmployees, postTickets })(withRouter(AddTicket))



