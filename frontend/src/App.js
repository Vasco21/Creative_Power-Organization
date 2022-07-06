import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyles from './Styles/GlobalStyles';
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import SingleNote from "./screens/SingleNote/SingleNote";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateNote from "./screens/SingleNote/CreateNote";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import Covid from "./screens/sections2/Covid";
import Layout from "./Layout";
import Page from "./screens/sections2/page-2";
import Contact from "./screens/sections/Contact";
import ScrollButton from "./scrollToTop/scrollBtn";
import Chapter from "./screens/sections2/Chapter";
import Talks from "./screens/sections2/Talks";
import Insight from "./screens/sections2/Offers"
import Stories from './screens/sections2/Stories'
import TeamMembers from "./screens/sections2/TeamMembersCard/Testimonial"
import AllMembers from "./screens/sections2/AllMembers";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <GlobalStyles/>
      <Header setSearch={(s) =>new  setSearch(s)} />
      <main className="App">
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/layout" component={Layout}/>
        <Route
          path="/mynotes"
          component={({ history }) => (
            <MyNotes search={search} history={history} />
          )}
        />
        <Route path="/note/:id" component={SingleNote} />
        <Route path="/createnote" component={CreateNote} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/page" component={Page}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/createnote" component={CreateNote} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/covid" component={Covid}/>
        <Route path="/chapters" component={Chapter}/>
        <Route path="/talks" component={Talks}/>
        <Route path="/insight" component={Insight}/>
        <Route path="/stories" component={Stories}/>
        <Route path="/teamMembers" component={TeamMembers}/>
        <Route path="/members" component={AllMembers}/>
     
      </main>
      <Footer />
      <ScrollButton/>
    </Router>
  );
}

export default App;
