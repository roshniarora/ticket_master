import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, BrowserRouter } from 'react-router-dom'
import Home from './components/static/Home'
import Register from './components/auth/Register.js'
import { startLogoutUser } from './redux/actions/userAction'
import Login from './components/auth/Login'
import Customers from './components/customers/Customers'
import AddCustomers from './components/customers/addCustomers'
import CustomerShow from './components/customers/CustomerShow'
import Departments from './components/Department/departments'
import DepartmentShow from './components/Department/departmentShow'
import Employees from './components/Employees/employees'
import AddEmployee from './components/Employees/addEmployees'
import employeeShow from './components/Employees/employeeShow'
import Ticket from './components/Tickets/tickets'
import AddTicket from './components/Tickets/addTicket'
import EditCustomer from './components/customers/customerEdit'
import EditDepartment from './components/Department/departmentEdit'
import EditEmployee from './components/Employees/employeeEdit'
import TicketShow from './components/Tickets/ticketShow'
// import Customers from './components/customers/Customers'


function App(props) {

    const token = localStorage.getItem("token")

    const handleLogout = () => {
        props.dispatch(startLogoutUser())
    }

    return (
        <BrowserRouter>

            <div>
                <h1> Ticket Master </h1>


                {
                    token ? (
                        <div>

                            {/* <Link to="/account">Account</Link> */}
                            <Link to="/">Home</Link>
                            <Link to="/customers" >Customers</Link>{" "}
                            <Link to="/departments" >Department</Link>{" "}
                            <Link to="/employees" >Employees</Link>{" "}
                            <Link to="/tickets" >Tickets</Link>{" "}
                            <Link to="#" onClick={handleLogout}>Logout</Link>


                        </div>
                    ) : (
                            <div>
                                <Link to="/">Home</Link>
                                <Link to="/users/register">Register</Link>
                                <Link to="/users/login">Login</Link>

                            </div>
                        )
                }


                <switch>

                    <Route path="/" component={Home} exact={true} />
                    <Route path="/users/register" component={Register} />
                    <Route path="/users/login" component={Login} />
                    <Route path="/customers" component={Customers} exact />
                    <Route path="/users/addcustomers" component={AddCustomers} />
                    <Route path="/customers/:id" component={CustomerShow} />
                    <Route path="/editcustomer" component={EditCustomer} />
                    <Route path="/departments" component={Departments} exact />
                    <Route path="/showdepartment/:id" component={DepartmentShow} />
                    <Route path="/editdepartment" component={EditDepartment} />

                    <Route path="/employees" component={Employees} exact />
                    <Route path="/addemployee" component={AddEmployee} exact />
                    <Route path="/employees/:id" component={employeeShow} />
                    <Route path="/editemployee" component={EditEmployee} />
                    <Route path="/tickets" component={Ticket} exact />
                    <Route path="/addtickets" component={AddTicket} />
                    <Route path="/tickets/:id" component={TicketShow} exact />


                </switch>

            </div>
        </BrowserRouter>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         user: state.user
//     }
// }

export default connect()(App)