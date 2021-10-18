import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className = 'sidebar'>
            <div className="sidebar_top">
                <img src="" alt="" />
                <Avatar className = 'sidebar_avatar'/>
                <h2>Tony Ngeno</h2>
                <h4>tonitongeno@gmail.com</h4>
            </div>
        </div>
    )
}

export default Sidebar
