import React, { useState } from 'react';
import "./Feed.css"
import CreateIcon from "@material-ui/icons/Create"
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionIcon from "@material-ui/icons/Subscriptions"
import EventNoteIcon from "@material-ui/icons/EventNote"
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay"

import InputOption from './InputOption';
import Post from './Post.js';


function Feed() {

    const[posts, setPosts] = useState([]);

    const sendPost = e => {
        //prevents page refresh
        e.preventDefault();
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input type="text"/>
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
            {posts.map(post => {
                <Post />
            })};

            <Post 
                name="Anthony Hernandez" 
                description="This is a test"
                message="WOW WHAT A LIFE"
            />
        </div>
    )
}

export default Feed;
