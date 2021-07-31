import React from 'react';
import "./Feed.css"
import CreateIcon from "@material-ui/icons/Create"
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionIcon from "@material-ui/icons/Subscriptions"
import EventNoteIcon from "@material-ui/icons/EventNote"
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay"

import InputOption from './InputOption';


function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input type="text"/>
                        <button type="submit">send</button>
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
        </div>
    )
}

export default Feed;
