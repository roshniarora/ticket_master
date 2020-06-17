import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Formik, Field, Form } from 'formik'
import { Input, Button, Modal } from 'antd'
import { connect } from 'react-redux'
import { startRegisterUser } from '../../redux/actions/userAction'



const Register = (props) => {

    const [visible, setVisible] = useState(false)

    const showModal = () => {
        setVisible(true)
    };

    const handleCancel = e => {
        console.log(e);
        setVisible(false)
    };

    return (
        <div>

            <div className='center'>
                <Button type="primary" size='large' onClick={showModal}>
                    Register With us
                         </Button>
            </div>
            <Modal
                title="Basic Modal"
                visible={visible}
                // onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                maskClosable={false}
            >
                <Formik
                    initialValues={{
                        username: '',
                        email: '',
                        password: ''

                    }

                    }
                    onSubmit={values => {
                        // console.log("submit", values)

                        props.startRegisterUser(values, props.history)
                    }}
                >

                    {({ handleSubmit }) => (

                        <Form onSubmit={handleSubmit}>

                            <label>UserName</label>
                            <Field name='username' as={Input} placeholder=" UserName" />

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
            </Modal>
        </div >

    )

}

export default connect(null, { startRegisterUser })(withRouter(Register))