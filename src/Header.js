//rfce
import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';


function Header() {
    return (
        <div className = 'header'>
            <div className = "header__left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt=""/>
                <div className = "header__search">
                    <SearchIcon/>
                    <input type="text" />

                </div>
            </div>
            <div className = "header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption title="me" avatar="data:image/jpeg;base64,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" />
           
            </div>

            

        </div>
    )
}

export default Header
