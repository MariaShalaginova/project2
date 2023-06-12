import React from "react";
import {Routes, Route } from 'react-router-dom'
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import UserPage from "./components/user-login-page/UserPage";
import ScanPage from "./components/scan-page/ScanPage";
import ResultPage from "./components/result-page/ResultPage";
import Rates from "./components/rates/Rates";
import { useState } from "react";
import ArticleCard from "./components/article-card/ArticleCard";

function ReduxApp() {

  const [isLoading, setIsLoading] = useState(false);
  const [histogram, setHistogram] = useState([]);
  const [article, setArticle] = useState([]);

    return (
        <div className="content">
          <div className = "wrapper">
              <Header />
              <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/login" element={<UserPage />} /> 
                <Route path="/scan" element={<ScanPage histogram = {histogram} setHistogram = {setHistogram} isLoading={isLoading} setIsLoading={setIsLoading} setArticle={setArticle}/>}  /> 
                <Route path="/result" element={<ResultPage histogram = {histogram} isLoading={isLoading} article={article}/>} /> 
                <Route path="/rates" element={<Rates />} />
                <Route path="/articles" element={<ArticleCard />} article={article}/>
              </Routes>
          </div>
          <Footer />           
        </div>
      )
}

export default ReduxApp