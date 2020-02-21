import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './Fonts.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import WebAnimation from "./components/BlogAnimation/WebAnimation";
import Adventurous from "./components/BlogAdventurous/Adventurous";
import Mobile from "./components/BlogMobile/Mobile";
import Playful from "./components/BlogPlayful/Playful";
import Standart from "./components/BlogStandart/Standart";
import DevAndroid from "./components/DevAndroid/DevAndroid";
import DevIos from "./components/DevIos/DevIos";
import DevUnity from "./components/DevUnity/DevUnity";
import DevWebsite from "./components/DevWebsite/DevWebsite";
import Marketing from "./components/Marketing/Marketing";
import Design from "./components/Design/Design";



import {BrowserRouter, Route} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";



const App = (props) => {

  return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <ScrollToTop/>
            <div className="App">
                <header>
                    <Header/>
                </header>
                <div className='nav_navigation'>
                    <Navigation  menuData={props.appState.navigation.menuData} menuSidebar={props.appState.navigation.menuSidebar} changeStyleElement={props.changeStyleElement}/>
                </div>
                <div className='content'>
                    <Route exact path='/'
                           render={ () => <Home arrHead={props.appState.homePage.arrHead} homeBlock2={props.appState.homePage.homeBlock2} homeBlock3={props.appState.homePage.homeBlock3}

                               homeBlock4={props.appState.homePage.homeBlock4}
                               homeBlock5={props.appState.homePage.homeBlock5}
                               homeBlock11={props.appState.homePage.homeBlock11}
                               homeBlock6 = {props.appState.homePage.homeBlock6}
                               homeGallery = {props.appState.homePage.homeGallery}
                               homeGalleryBlue = {props.appState.homePage.SledirImg}
                               homeRanking = {props.appState.homePage.homeRanking}
                               blockComments = {props.appState.homePage.blockComments}
                               blockTehno = {props.appState.homePage.blockTehno}
                               blockIndustries = {props.appState.homePage.BlockIndustries}
                               blockTeam = {props.appState.homePage.blockTeam}
                           />}/>
                    <Route path='/about'
                           render={ () => <About
                               homeBlock5={props.appState.homePage.homeBlock5}
                               homeRanking = {props.appState.homePage.homeRanking}
                               homeGallery = {props.appState.homePage.homeGallery}
                               blockTeam = {props.appState.homePage.blockTeam}
                           />} />
                    <Route path='/portfolio'
                           render={ () => <Portfolio
                                portfolioImg = {props.appState.portfolioPage.portfolioImg}
                                homeGallery = {props.appState.homePage.homeGallery}

                           />} />
                    <Route path='/blog'
                           render = {()=><Blog
                               blogPage = {props.appState.blogPage.blog}

                    />} />
                    <Route path='/animation'
                           render={()=><WebAnimation
                               animation ={props.appState.blogPage.animation}
                           />}/>
                    <Route path='/standartisation'
                           render={()=><Standart
                               animation ={props.appState.blogPage.animation}
                           />}/>
                    <Route path='/mobile' component={Mobile}/>

                    <Route path='/playful'
                          render={()=><Playful
                              animation ={props.appState.blogPage.animation}
                          />}/>
                    <Route path='/adventurous'
                           render={()=><Adventurous
                               animation ={props.appState.blogPage.animation}
                           />}/>
                    <Route path='/development_IOS'
                           render={()=><DevIos
                               arrServise = {props.appState.arrServise}

                           />}/>
                    <Route path='/development_android'
                           render={()=><DevAndroid
                               arrServise = {props.appState.arrServise}
                               homeGallery = {props.appState.homePage.homeGallery}

                           />}/>
                    <Route path='/development_website'
                           render={()=><DevWebsite
                               arrServise = {props.appState.arrServise}
                               homeGallery = {props.appState.homePage.homeGallery}

                           />}/>

                    <Route path='/development_unity' component={DevUnity}/>
                    <Route path='/marketing' component={Marketing}/>
                    <Route path='/design' component={Design}/>
                    <Route path='/contact'
                           render = {()=>  <Contact
                               homeGallery = {props.appState.homePage.homeGallery}
                               blockComments = {props.appState.homePage.blockComments}
                               />} />
                </div>
                <div className='footer'>
                    <Footer menuSidebar = {props.appState.navigation.menuSidebar} menuData = {props.appState.navigation.menuData} />
                </div>
            </div>
        </BrowserRouter>
  );
};

export default App;
