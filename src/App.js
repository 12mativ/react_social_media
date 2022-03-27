import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <div className="wrapper">
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className="wrapper-content">
                <Routes>
                    <Route path='/profile' element={<Profile profilePage={props.state.profilePage}
                                                             addPost={props.addPost}
                                                             updatePostText={props.updatePostText}/>}/>

                    <Route path='/dialogs/*' element={<Dialogs dialogsPage={props.state.dialogsPage}
                                                               addMessage={props.addMessage}
                                                               updateMessageText={props.updateMessageText}/>}/>

                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
