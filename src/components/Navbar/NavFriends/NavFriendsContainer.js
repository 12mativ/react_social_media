import {connect} from "react-redux";
import NavFriends from "./NavFriends";

const mapPropsToState = (state) => {
    return {
        friends: state.sidebar.friends,
    }
}

const mapDispatchToState = (dispatch) => {
    return {}
}

const NavMenuContainer = connect(mapPropsToState, mapDispatchToState)(NavFriends)

export default NavMenuContainer;