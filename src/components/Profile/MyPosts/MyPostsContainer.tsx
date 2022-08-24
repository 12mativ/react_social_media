import {addPost, AddPostActionType} from "../../../redux/profile/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {PostsType} from "../../../types/types";

type MapStateProps = {
    posts: Array<PostsType>
}

type MapDispatchProps = {
    addPost: (text: string) => AddPostActionType
}

const mapStateToProps = (state: AppStateType): MapStateProps => {
    return {
        posts: state.profilePage.posts,
    }
}

const MyPostsContainer = connect<MapStateProps, MapDispatchProps, null, AppStateType>(mapStateToProps, {addPost})(MyPosts)

export default MyPostsContainer;