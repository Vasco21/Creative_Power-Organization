import React from "react";
import Home from "./screens/sections/HomeHeder"
import GlobalStyles from "./Styles/GlobalStyles";
import About from "./screens/sections/About";
import Mission from "./screens/sections/Mission";
import Blog from './screens/sections/Blog';
import Contact from './screens/sections/Contact';
import Faq from './screens/sections/Faq';
import TopSection from './screens/sections/TopSection';
import MapMarker from './screens/sections/MapMarker';
import Facts from './screens/sections/Facts';
import Followers from "./screens/Followers/Followers";

function Layout(props) {
  return (
    <>
      <GlobalStyles/>
    <div className="app">
      <main>
        <div className="app-content">{props.children}</div>
        <TopSection/>
        <Home/>
        <About/>
        <Blog/>
        <Mission/>
        <Faq/>
        <Followers/>
        <Facts/>
        <Contact/>
        <MapMarker/>
      </main>
    </div>
    </>
  );
}

export default Layout;