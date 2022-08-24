import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import withRouter from "./help_func/withRouter";

import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {initializeApp} from "./redux/app/app-reducer";

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {
    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert('Some error occured!')
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="wrapper-content">
                    <React.Suspense fallback={<Preloader />}>
                            <Routes>
                                <Route path="/" element={<Navigate to="/profile" />} />

                                <Route path='/profile/' element={<ProfileContainer/>}/>

                                <Route path='/profile/:profileId' element={<ProfileContainer/>}/>

                                <Route path='/dialogs/*' element={<DialogsContainer/>}/>

                                <Route path='/users/*' element={<UsersContainer pageTitle='Users'/>}/>

                                <Route path='/login' element={<Login/>}/>

                                <Route path='/news' element={<News/>}/>
                                <Route path='/music' element={<Music/>}/>
                                <Route path='/settings' element={<Settings/>}/>

                                <Route path='*' element={<div>404 NOT FOUND</div>}/>
                            </Routes>
                    </React.Suspense>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

export const GeneralApp = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>

                <Provider store={store}>
                    <AppContainer/>
                </Provider>

            </BrowserRouter>
        </React.StrictMode>
    )

}