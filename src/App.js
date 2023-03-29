import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DefaultLayout from './components/layout/DefaultLayout';
import { publicRoutes, privateRoutes } from './routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let LayOut = DefaultLayout;
                        if (route.layout) {
                            LayOut = route.layout;
                        } else if (route.layout === null) {
                            LayOut = Fragment;
                        }
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <LayOut>
                                        <Page></Page>
                                    </LayOut>
                                }
                            />
                        );
                    })}
                    {/* <Route path="/" element={<Home />}></Route>
                    <Route path="/following" element={<Following />}></Route> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
