import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className = 'sidebar'>
            <div className="sidebar_top">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/002/211/738/small/black-modern-material-background-with-overlapped-sheets-of-paper-in-cmyk-colors-template-for-your-business-abstract-widescreen-background-vector.jpg" alt="" />
                <Avatar className = 'sidebar_avatar'/>
                <h2>Tony Ngeno</h2>
                <h4>tonitongeno@gmail.com</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who Viewed You</p>
                    <p className = 'sidebar_statNumber'>
                        2,450
                    </p>
                </div>
                <div className="sidebar_stat">
                <p>Views on Post</p>
                    <p className = 'sidebar_statNumber'>
                        2,070
                    </p>
                </div>
                <div className="sidebar_bottom">
                    <p>Recent</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
