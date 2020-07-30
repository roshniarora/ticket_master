import React, { useEffect } from 'react'
import { Formik, Field, Form } from 'formik'
import { Input, Button } from 'antd'
import { withRouter } from 'react-router-dom'
import { getDepartmentById, editDepartment } from '../../redux/actions/departmentAction'
import { connect } from 'react-redux'

const EditDepartment = (props) => {
    useEffect(() => {
        const id = localStorage.getItem("depart_id")
        props.getDepartmentById(id)
    }, [])

    // console.log(props.department.id, "by id")

    return (
        <div>

            <Formik
                initialValues={{
                    name: props.department?.name || '',

                }}
                enableReinitialize
                onSubmit={values => {
                    console.log("submit", values)

                    props.editDepartment(props.department._id, values, props.history)
                }}
            >

                {({ handleSubmit }) => (

                    <Form onSubmit={handleSubmit}>

                        <label>Name</label>
                        <Field name='name' as={Input} placeholder=" Name" />



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
    department: state.departments.departmentById
})

export default connect(mapStateToProps, { getDepartmentById, editDepartment })(withRouter(EditDepartment))