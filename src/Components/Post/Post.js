import React, {forwardRef} from "react";
import "./Post.css"
import {Avatar} from "@material-ui/core";
import InputOption from "../InputOption/InputOption.js";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";


const Post = forwardRef( ({name, description, message, photoURL}, ref) => {
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoURL}> {name[0]} </Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            
            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOption title="Like" Icon={ThumbUpAltOutlinedIcon} color="gray"/>
                <InputOption title="Comment" Icon={ChatOutlinedIcon} color="gray"/>
                <InputOption title="Share" Icon={ShareOutlinedIcon} color="gray"/>
                <InputOption title="Send" Icon={SendOutlinedIcon} color="gray"/>

            </div>

        </div>
    );
})

export default Post;

