import "./App.css";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import {  Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Musik from "./components/Musik/Musik";
import Settings from "./components/Settings/Settings";



const App = (props) => {
  return (
      <div className="vesContent">
        <Nav />
        <Header />
        <div className="App-wrapper-content ">
          <Routes>
          <Route path="/Profile" element={<Profile profilePage={props.state.profilePage}
            dispatch={props.dispatch}
            

          />} />
            <Route path="/Dialogs" element={<Dialogs state={props.state.dialogsPage} />}/>
            <Route path="/News" element={<News />} />
            <Route path="/Musik" element={<Musik />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
   
  );
};


export default App;
