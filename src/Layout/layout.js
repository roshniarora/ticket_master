import React from 'react'
import './layout.css'

function Layout(props) {
    return <div className="mainContainer"> {props.children} </div>
}

export default Layout