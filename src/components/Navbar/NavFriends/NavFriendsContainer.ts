import {connect} from "react-redux";
import NavFriends from "./NavFriends";
import {AppStateType} from "../../../redux/redux-store";

export type FriendType = {
    id: number
    name: string
}

type MapStateProps = {
    friends: Array<FriendType>
}

const mapPropsToState = (state: AppStateType): MapStateProps => {
    return {
        friends: state.sidebar.friends,
    }
}

const NavMenuContainer = connect(mapPropsToState)(NavFriends)

export default NavMenuContainer;