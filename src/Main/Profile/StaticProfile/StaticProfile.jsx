import React from 'react'
import classes from './StaticProfile.module.css'

const StaticProfile = props => {
    return (
        <div className={`${classes.staticProfileView} ${classes.spgrid}`}>
            <div className={classes.avatarField}>Profile photo</div>
            <div className={classes.nameField}>Profile name</div>
            <div className={classes.wallpaperField}>Profile wallpaper</div>
            <div className={classes.emptyField}></div>
        </div>
    )
}

export default StaticProfile