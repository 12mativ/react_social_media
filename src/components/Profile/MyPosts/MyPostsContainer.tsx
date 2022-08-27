import {actions} from "../../../redux/profile/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {PostsType} from "../../../types/types";

type MapStateProps = {
    posts: Array<PostsType>
}

type MapDispatchProps = {
    addPost: (text: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateProps => {
    return {
        posts: state.profilePage.posts,
    }
}

const MyPostsContainer = connect<MapStateProps, MapDispatchProps,
    {}, AppStateType>(mapStateToProps, {addPost: actions.addPost})(MyPosts)

export default MyPostsContainer;