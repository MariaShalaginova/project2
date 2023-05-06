import React from "react";
import MainPage from "../main-page/MainPage";
import AboutCompany from "../about-company/AboutCompany";
import Rates from "../rates/Rates";
// import {Routes, Route} from 'react-router-dom';
// import ReduxApp from "../../App-redux.js";
// import UserPage from "../user-login-page/UserPage"

const Main = () => {
    
    return (
        <main>
            {/* <Routes>
                <Route exact path="/login" component={UserPage} />
                <Route path="/tasks/:taskId" element={<TaskDetail {...props} />} /> 
            </Routes> */}
            <MainPage />
            <AboutCompany />
            <Rates />      
        </main>
        
    )
}

export default Main