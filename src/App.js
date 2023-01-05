import React from "react";
import 'antd/dist/reset.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {QueryParamProvider} from 'use-query-params';
import {ReactRouter6Adapter} from 'use-query-params/adapters/react-router-6';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {UsersPage} from "./components/Users/UsersContainer";
import {LoginPage} from "./components/Login/LoginPage";
import {connect, Provider} from "react-redux";
import {compose} from "redux";

import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {initializeApp} from "./redux/app/app-reducer";
import {LayoutComponent} from "./components/Layout/Layout";

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'))

class App extends React.Component {
    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert('Some error occurred!')
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
            /*<div className="wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="wrapper-content">
                    <React.Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path="/" element={<Navigate to="/profile"/>}/>

                            <Route path='/profile/' element={<ProfileContainer/>}/>

                            <Route path='/profile/:profileId' element={<ProfileContainer/>}/>

                            <Route path='/dialogs/!*' element={<DialogsContainer/>}/>

                            <Route path='/users/!*' element={<UsersPage pageTitle='Users'/>}/>

                            <Route path='/login' element={<LoginPage/>}/>

                            <Route path='/news' element={<News/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/settings' element={<Settings/>}/>

                            <Route path='*' element={<div>404 NOT FOUND</div>}/>
                        </Routes>
                    </React.Suspense>
                </div>
            </div>*/

            <LayoutComponent>
                <React.Suspense fallback={<Preloader/>}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/profile"/>}/>

                        <Route path='/profile/' element={<ProfileContainer/>}/>

                        <Route path='/profile/:profileId' element={<ProfileContainer/>}/>

                        <Route path='/dialogs/*' element={<DialogsContainer/>}/>

                        <Route path='/users/*' element={<UsersPage pageTitle='Users'/>}/>

                        <Route path='/login' element={<LoginPage/>}/>

                        <Route path='/chat' element={<ChatPage/>}/>

                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>

                        <Route path='*' element={<div>404 NOT FOUND</div>}/>
                    </Routes>
                </React.Suspense>
            </LayoutComponent>
        );
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    connect(mapStateToProps, {initializeApp}))(App)

export const GeneralApp = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <QueryParamProvider adapter={ReactRouter6Adapter}>
                    <Provider store={store}>
                        <AppContainer/>
                    </Provider>
                </QueryParamProvider>
            </BrowserRouter>
        </React.StrictMode>
    )

}