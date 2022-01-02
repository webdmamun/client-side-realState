import { Route, Routes } from "react-router-dom";
import Agent from "./Pages/Agent/Agent";
import Login from "./Pages/Authentication/Login/Login";
import Registration from "./Pages/Authentication/Registration/Registration";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Notfound from "./Pages/Notfound/Notfound";
import Properties from "./Pages/Properties/Properties";
import Footer from "./Pages/Shared/Footer/Footer";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="blogs" element={<Blogs />}></Route>
        <Route path="properties" element={<Properties />}></Route>
        <Route path="agent" element={<Agent />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="registration" element={<Registration />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
