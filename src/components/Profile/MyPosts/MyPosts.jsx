import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {Form, Formik} from "formik";
import {FormikControl} from "../../Forms/FormikControl";
import postFormSchema from "../../FormValidation/PostFormSchema";

const MyPosts = (props) => {
    let postsElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount} key={post.id}/>)

    let onAddPost = (text) => {
        props.addPost(text)
    }

    return (
        <div>
            <h3 className={classes.posts_header}>My posts</h3>

            <PostForm onAddPost={onAddPost}/>
            {/*<textarea placeholder='Your post' ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>*/}
            {/*<button onClick={onAddPost}>Add post</button>*/}

            {postsElements}
        </div>

    );
}

const initialValues = {
    postText: ''
}

const PostForm = (props) => {
    const onSubmit = (values, actions) => {
        actions.resetForm()
        console.log(values)
        props.onAddPost(values.postText)
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

                            <button type='submit' disabled={!formik.isValid} className={classes.submit_btn}>Post</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default MyPosts;