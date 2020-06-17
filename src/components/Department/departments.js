import React, { useState, useEffect } from 'react'
import { Formik, Field, Form } from 'formik'
import { Input, Button, Modal } from 'antd'
import { connect } from 'react-redux'

import { postDepartment, getdepartment, removeDepartment } from '../../redux/actions/departmentAction'



const Departments = (props) => {

    useEffect(() => {
        // console.log(props.match.params.id, "idd")

        props.getdepartment()
    }, [])
    console.log(props.departments, "data")

    const [visible, setVisible] = useState(false)

    const showModal = () => {
        setVisible(true)
    };

    const handleCancel = e => {
        console.log(e);
        setVisible(false)
    };

    const handleClick = (id) => {
        props.history.push(`/showdepartment/${id}`)
    }

    const handleDelete = (id) => {

        if (window.confirm("Are you sure to delete this item ?")) {
            return props.removeDepartment(id)
        } else {
            return "sorry something went wrong"
        }

        // props.deleteCustomer(id)
    }

    return (
        <div>
            <table>

                {
                    props.departments.map((ele) => {
                        return (
                            <tr>
                                <td>{ele.name}</td>  <button onClick={() => handleClick(ele._id)} > Show </button>
                                <td> {ele.remove}  <button onClick={() => handleDelete(ele._id)}> Remove </button> </td>

                            </tr>
                        )
                    })

                }
            </table>
            <div className='center'>
                <Button type="primary" size='large' onClick={showModal}> Add Department here </Button>
            </div>
            <Modal
                title="DEPARTMENTS"
                visible={visible}
                // onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                maskClosable={false}
            >
                <Formik
                    initialValues={{
                        name: ''
                    }
                    }
                    onSubmit={values => {
                        console.log("submit", values)

                        props.postDepartment(values)
                        // props.postDepartment(values, props.history)
                        setVisible(false)
                    }}
                >
                    {({ handleSubmit }) => (

                        <Form onSubmit={handleSubmit}>

                            <label> Add Department</label>
                            <Field name='name' as={Input} placeholder=" Add Depertment here" />

                            <div className='mt-4 text-right'>
                                <Button htmlType="submit" type="button" > Add </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </div>
    )
}
const mapStateToProps = (state) => ({
    departments: state.departments.departments
})

export default connect(mapStateToProps, { postDepartment, getdepartment, removeDepartment })(Departments)