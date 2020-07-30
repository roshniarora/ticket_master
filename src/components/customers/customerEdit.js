import React, { useEffect } from 'react'
import { Formik, Field, Form } from 'formik'
import { Input, Button } from 'antd'
import { withRouter } from 'react-router-dom'
import { getCustomerById, editCustomer } from '../../redux/actions/customerAction'
import { connect } from 'react-redux'

const EditCustomer = (props) => {
    useEffect(() => {
        const id = localStorage.getItem("cust_id")
        props.getCustomerById(id)
    }, [])

    console.log(props.customer.id, "by id")

    return (
        <div>

            <Formik
                initialValues={{
                    name: props.customer?.name || '',
                    email: props.customer?.email || '',
                    mobile: props.customer?.mobile || ''
                }}
                enableReinitialize
                onSubmit={values => {
                    console.log("submit", values)

                    props.editCustomer(props.customer._id, values, props.history)
                }}
            >

                {({ handleSubmit }) => (

                    <Form onSubmit={handleSubmit}>

                        <label>Name</label>
                        <Field name='name' as={Input} placeholder=" UserName" />

                        <label>Email</label>
                        <Field name="email" as={Input} placeholder="Email" />


                        <label>Mobile</label>
                        <Field name="mobile" as={Input} placeholder="mobile" />

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
    customer: state.customers.customersId
})

export default connect(mapStateToProps, { getCustomerById, editCustomer })(withRouter(EditCustomer))