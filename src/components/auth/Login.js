import React from 'react'
import { Formik, Field, Form } from 'formik'
import { Input, Button } from 'antd'

import { startLoginUser } from '../../redux/actions/userAction'
import { connect } from 'react-redux'

const Login = (props) => {

    return (
        <div>
            <h2> Login </h2>
            <Formik
                initialValues={{

                    email: '',
                    password: ''

                }

                }
                onSubmit={values => {
                    // console.log("submit", values)

                    props.startLoginUser(values, props.history)
                }}
            >

                {({ handleSubmit }) => (

                    <Form onSubmit={handleSubmit}>


                        <label>Email</label>
                        <Field name="email" as={Input} placeholder="Email" />


                        <label>Password</label>
                        <Field name="password" type='password' as={Input} placeholder="Password" />

                        <div className='mt-4 text-right'>
                            <Button htmlType="submit" type="button" > Submit </Button>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>

    )
}





export default connect(null, { startLoginUser })(Login)