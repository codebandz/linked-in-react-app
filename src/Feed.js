import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@mui/icons-material'
import React, { useState } from 'react'
import './Feed.css'
import InputOption from './InputOption'
import Post from './Post'

function Feed() {

    const [posts, setPosts] = useState([])

    return (
        <div className = 'feed'>
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <Create/>
                    <form>
                        <input placeholder = 'Start a Post' type="text"/>
                        <button type = 'submit'>Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon = {Image} title = 'Photo' color ='#70B5F9'/>
                    <InputOption Icon = {Subscriptions} title = 'Video' color ='#E7A33E'/>
                    <InputOption Icon = {EventNote} title = 'Event' color ='#C0CBCD'/>
                    <InputOption Icon = {CalendarViewDay} title = 'Write article' color ='#7FC15E'/>
                </div>
            </div>
            {posts.map((post) => (
               <Post/> 
            ))}
            <Post 
                name = 'Tony Ngeno'
                description = 'This is a test'
                message = 'It worked.Wow!'
            />
        </div>
    )
}

export default Feed
