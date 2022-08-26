import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {Form, Formik, FormikHelpers} from "formik";
import {FormikControl} from "../../Forms/FormikControl";
import postFormSchema from "../../FormValidation/PostFormSchema";
import {PostsType} from "../../../types/types";

type MyPostsType = {
    posts: Array<PostsType>
    addPost: (text: string) => void
}

const MyPosts: React.FC<MyPostsType> = ({posts, addPost}) => {
    let postsElements = [...posts].reverse()
        .map(post =>
            <Post
                message={post.message}
                likesCount={post.likesCount}
                key={post.id}
            />
        )
    let onAddPost = (text: string) => {
        addPost(text)
    }

    return (
        <div>
            <h3 className={classes.posts_header}>My posts</h3>

            <PostForm onAddPost={onAddPost}/>

            {postsElements}
        </div>

    );
};

type InitialValuesType = {
    postText: string
}

const initialValues = {
    postText: ''
}

type PostFormType = {
    onAddPost: (text: string) => void
}

const PostForm: React.FC<PostFormType> = ({onAddPost}) => {
    const onSubmit = (values: InitialValuesType, actions: FormikHelpers<InitialValuesType>) => {
        actions.resetForm()
        onAddPost(values.postText)
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={postFormSchema}
        >
            {
                formik => {
                    return (
                        <Form className={classes.post_field}>
                            <FormikControl
                                control='textarea'
                                name='postText'
                                noError={true}
                                placeholder='Your post'
                            />

                            <button
                                type='submit'
                                disabled={!formik.isValid}
                                className={`${classes.submit_btn} btn`}
                            >
                                Post
                            </button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default MyPosts;