import React from 'react'
import StaticProfile from "./StaticProfile/StaticProfile";
import DynamicProfileFeed from "./DynamicProfile/DynamicProfileFeed";
import classes from './Profile.module.css'

const Profile = props => {
    return (
        <div className={classes.profileWrapper}>
            <StaticProfile />
            <DynamicProfileFeed />
        </div>
    )
}


export default Profile