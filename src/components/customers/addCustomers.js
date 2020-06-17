import React from 'react'
import { connect } from 'react-redux'
import { Formik, Field, Form } from 'formik'
import { Input, Button, Modal } from 'antd'
import { postCustomerDetails } from '../../redux/actions/customerAction'
import { withRouter } from 'react-router-dom'

const AddCustomers = (props) => {
    return (
        <div>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    mobile: ''

                }

                }
                onSubmit={values => {
                    console.log("submit", values)

                    props.postCustomerDetails(values, props.history)
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

export default connect(null, { postCustomerDetails })(withRouter(AddCustomers))