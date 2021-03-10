import React from 'react'
// RRD
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// Scroll to top
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
// Components
import NavigationBar from './components/NavigationBar/NavigationBar'
// Pages
import MainPage from './components/MainPage/MainPage'
import AboutUsPage from './components/AboutUsPage/AboutUsPage'
// Cases
import Case from './components/Case/Case'
import case1 from './components/cases/case1'
import case2 from './components/cases/case2'
import case3 from './components/cases/case3'



function App() {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <NavigationBar />
                <Switch>
                    <Route path="/case1">
                        <Case case={case1} />
                    </Route>
                    <Route path="/case2">
                        <Case case={case2} />
                    </Route>
                    <Route path="/case3">
                        <Case case={case3} />
                    </Route>
                    <Route path="/about">
                        <AboutUsPage />
                    </Route>
                    <Route path="/">
                        <MainPage />
                    </Route>
                </Switch>
            </ScrollToTop>
        </BrowserRouter>
    );
}



export default App;