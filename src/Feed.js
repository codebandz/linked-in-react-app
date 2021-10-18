import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import './Feed.css';
import { db } from './firebase';
import InputOption from './InputOption';
import Post from './Post';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Feed() {

    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    const user = useSelector(selectUser);


    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => (
                {
                    id:doc.id,
                    data:doc.data(),
                }
            )))
        })
    }, [])

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput('');
    }

    return (
        <div className = 'feed'>
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <Create/>
                    <form>
                        <input value = {input} onChange = {e => setInput(e.target.value)} placeholder = 'Start a Post' type="text"/>
                        <button  onClick = {sendPost} type = 'submit'>Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon = {Image} title = 'Photo' color ='#70B5F9'/>
                    <InputOption Icon = {Subscriptions} title = 'Video' color ='#E7A33E'/>
                    <InputOption Icon = {EventNote} title = 'Event' color ='#C0CBCD'/>
                    <InputOption Icon = {CalendarViewDay} title = 'Write article' color ='#7FC15E'/>
                </div>
            </div>
            {posts.map(({id, data: {name, description, message,
            photoUrl} }) => (
               <Post
                key = {id}
                name = {name}
                description = {description}
                message = {message}
                photoUrl = {photoUrl}
               
               /> 
            ))}
        
        </div>
    )
}

export default Feed
