import React, { useEffect, useState } from 'react';
import "./Feed.css"
import CreateIcon from "@material-ui/icons/Create"
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionIcon from "@material-ui/icons/Subscriptions"
import EventNoteIcon from "@material-ui/icons/EventNote"
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay"

import InputOption from './InputOption';
import Post from './Post.js';
import firebase from 'firebase';
import {db, auth} from "./firebase.js";
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import FlipMove from "react-flip-move";



function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState("");
    const[posts, setPosts] = useState([]);

    //the 2nd paramaeter makes it so that this will only load once.
    //Otherwise, it will load up upon every re-rendering.
    useEffect(()=> {
        db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot(snapshot => {
            setPosts(
                //.map returns a new array
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                }))
            );
        });

    }, []);

    const sendPost = e => {
        //prevents page refresh
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoURL: user.photoURL || user.email[0],
            timestamp: firebase.firestore.FieldValue.serverTimestamp()

        });
        setInput("");
    };

    const handleInputChange = e => {
        setInput(e.target.value);
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input value={input} onChange={handleInputChange} type="text"/>
                        <button onClick={sendPost} type="submit">send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption title="Photo" Icon={ImageIcon} color="#7005f9"/>
                    <InputOption title="Video" Icon={SubscriptionIcon} color="#C7A33E"/>
                    <InputOption title="Event" Icon={EventNoteIcon} color="#C0CBCD"/>
                    <InputOption title="Write Article" Icon={CalendarViewDayIcon} 
                        color="#7FC15E"/>

                </div>

            </div>
            {/* posts */}
            <FlipMove>
                {posts.map(post =>  (
                    <Post
                        key = {post.id}
                        name = {post.data.name}
                        description = {post.data.description}
                        message = {post.data.message}
                        photoURL = {post.data.photoURL}
                    />
                    )
                )}
            </FlipMove>
            

            {/* <Post 
                name="Anthony Hernandez" 
                description="This is a test"
                message="WOW WHAT A LIFE"
            /> */}
        </div>
    )
}

export default Feed;
