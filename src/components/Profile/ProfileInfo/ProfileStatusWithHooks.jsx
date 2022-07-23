import React, {useEffect, useState} from "react";
import classes from './ProfileInfo.module.css'

const ProfileStatusWithHooks = props => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        if(props.isOwner) {
            setEditMode(true)
        }
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            {!editMode &&
                <div className={classes.status_wrapper}>
                    <span
                        className={classes.status}
                        onDoubleClick={activateEditMode}
                    >
                        {props.status || "------"}
                    </span>
                </div>
            }
            {editMode &&
                <div>
                    <input
                        className={classes.status_input}
                        autoFocus={true}
                        value={status}
                        onChange={onStatusChange}
                        onBlur={deactivateEditMode}
                        placeholder='Your status'
                    />
                </div>
            }
        </>
    );
}


export default ProfileStatusWithHooks;