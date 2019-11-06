import React from 'react'
import classes from './DynamicProfile.module.css'

const DynamicProfile = props => {
    return (
        <div className={classes.dynamicProfileView}>
            <div>There are buttons</div>
            <div>
                <div>
                    <textarea></textarea>
                    <button>submit</button>
                </div>
                <div>There are posts
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </div>
        </div>
    )
}

export default DynamicProfile