import React, {ChangeEvent} from "react";
import classes from './ProfileInfo.module.css'

type ProfileStatusProps = {
    status: string
    updateStatus: (status: string) => void
}

type ProfileStatusState = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusProps, ProfileStatusState> {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }

    componentDidUpdate(prevProps: ProfileStatusProps, prevState: ProfileStatusState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "------"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                            className={classes.status_input}
                            onChange={this.onStatusChange}
                            autoFocus={true}
                            onBlur={this.deactivateEditMode}
                            value={this.state.status}
                            placeholder='Your status'
                        />
                    </div>
                }
            </>
        );
    }
}

export default ProfileStatus;