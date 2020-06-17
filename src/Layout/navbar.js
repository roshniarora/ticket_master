import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <Menu mode="horizontal">
                    <Menu.Item ><Link to="/home">Home</Link> </Menu.Item>

                    <Menu.Item><Link to="/users/register">Register</Link> </Menu.Item>

                    <Menu.Item> <Link to="/users/login">Login</Link> </Menu.Item>



                    {
                        token ? (
                            <div>

                                {/* <Link to="/account">Account</Link> */}
                                <Link to="/customers" >Customers</Link>{" "}
                                <Link to="/departments" >Department</Link>{" "}
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




                </Menu>

            </div >

        )
    }
}
export default Navbar