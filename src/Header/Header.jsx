import React from 'react'
import classes from './Header.module.css'

const Header = props => {
    return (
        <header>
            <nav className={classes.nav}>
                <div className={classes.item}><a>Feed</a></div>
                <div className={classes.item}><a>Profile</a></div>
                <div className={classes.item}><a>Messages</a></div>
                <div className={classes.item}><a>smth</a></div>
            </nav>
        </header>
    )
}

export default Header