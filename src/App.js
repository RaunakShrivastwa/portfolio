import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./styles.scss";
import Header from "./commonComponents/Header/Header.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Test from "./Components/Root/Root.jsx";
import SignIn from "./authComponent/SignIn/SignIn.jsx";
import About from "./Components/About/AboutUs.jsx";
import BlogPage from "./Components/BlogPage/BlogPage.jsx";
import Career from "./Components/CareerPage/Career.jsx";
import Services from "./Components/Services/Services.jsx";
import OurWork from "./Components/OurWork/WorkView/WorkView.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import SignUp from "./authComponent/SignUp/SignUp.jsx";
import Dashboard from "./dashBoard/Dashboard.jsx";
import Clients from "./Components/Clients/Clients.jsx";
import {populateUser} from './features/serverSlice.js';
import { useDispatch } from "react-redux";




// Child component to manage layout based on route
const Layout = ({ setTheme, theme }) => {
  const location = useLocation();
  const disptch = useDispatch();


  // Define routes where the header should be hidden
  const hideHeaderRoutes = ["/api/letswork/dashboard"];
  const isHeaderVisible = !hideHeaderRoutes.includes(location.pathname);

  useEffect(()=>{
      disptch(populateUser());
      
  },[]);

  
  return (
    <>
      {isHeaderVisible && <Header setTheme={setTheme} theme={theme} />}
      <Routes>
        <Route exact path="/api/letswork/blog" element={<BlogPage />} />
        <Route exact path="/" element={<Test theme={theme} />} />
        <Route exact path="/api/auth/signin/user" element={<SignIn />} />
        <Route exact path="/api/letswork/about" element={<About />} />
        <Route exact path="/api/letswork/services" element={<Services />} />
        <Route exact path="/api/letswork/career" element={<Career />} />
        <Route exact path="/api/letswork/our/work" element={<OurWork />} />
        <Route exact path="/api/letswork/contact/us" element={<Contact />} />
        <Route exact path="/api/letswork/clients" element={<Clients />} />
        <Route
          exact
          path="/api/letswork/register/account"
          element={<SignUp />}
        />
        <Route exact path="/api/letswork/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

const App = () => {
  const [theme, setTheme] = useState("light_theme");

  return (
    <main className={`main_Container ${theme}`}>
      <Router>
        <Layout setTheme={setTheme} theme={theme} />
      </Router>
    </main>
  );
};

export default App;
