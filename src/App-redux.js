import React from "react";
// import { connect } from "react-redux";
// import {BrowserRouter, BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import UserPage from "./components/user-login-page/UserPage";
import ScanPage from "./components/scan-page/ScanPage";
import ResultPage from "./components/result-page/ResultPage";
import Rates from "./components/rates/Rates";

// class ReduxApp extends React.Component{
//     render(){
//         return (
//             <div>ghbdtn
//             </div>
//         )
//     }
// }

function ReduxApp() {
    return (
        <div className="content">
          <div className = "wrapper">
              <Header />
              <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/login" element={<UserPage />} /> 
                <Route path="/scan" element={<ScanPage />}  /> 
                <Route path="/result" element={<ResultPage />} /> 
                <Route path="/rates" element={<Rates />} />        
              </Routes>
              
              {/* <Main tasks={tasks} setTasks={setTasks} />
              <Footer tasks={tasks} />  */}
          </div>
          <Footer />           
        </div>
      )
}

export default ReduxApp