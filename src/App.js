import { Route, Routes } from "react-router-dom";
import Agent from "./Pages/Agents/Agents";
import Login from "./Pages/Authentication/Login/Login";
import Registration from "./Pages/Authentication/Registration/Registration";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Notfound from "./Pages/Notfound/Notfound";
import Properties from "./Pages/Properties/Properties";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import AuthProvider from "./Pages/Context/AuthContext";
import PrivateRoute from "./Pages/Route/PrivetRoute/PrivetRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DashBoardHome from "./Pages/Dashboard/DashBoardHome/DashBoardHome";
import Admin from "./Pages/Dashboard/Admin/Admin";
import AddService from "./Pages/Dashboard/AddServices/AddProperties";
import DeleteService from "./Pages/Dashboard/DeleteProperties/DeleteProperties";
import DeleteAgent from "./Pages/Dashboard/DeleteAgent/DeleteAgent";
import AddAgent from "./Pages/Dashboard/AddAgent/AddAgent";
import PropertyDetails from "./Pages/Properties/PropertyDetails/PropertyDetails";
import GiveReview from "./Pages/Dashboard/GiveReview/GiveReview";
import Booking from "./Pages/Booking/Booking";
import MyBooking from "./Pages/Dashboard/MyBooking/MyBooking";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="blogs" element={<Blogs />}></Route>
          <Route path="properties" element={<Properties />}></Route>

          <Route
            path="details/:_id"
            element={
              <PrivateRoute>
                <PropertyDetails />
              </PrivateRoute>
            }
          ></Route>
          <Route path="booking" element={<Booking />}></Route>
          <Route path="agent" element={<Agent />}></Route>
          <Route path="contact" element={<Contact />}></Route>

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="/dashboard" element={<DashBoardHome />} />
            <Route path="/dashboard/Admin" element={<Admin />} />
            <Route path="/dashboard/addProperties" element={<AddService />} />
            <Route path="/dashboard/addAgent" element={<AddAgent />} />
            <Route path="/dashboard/delete" element={<DeleteService />} />
            <Route path="/dashboard/deleteAgent" element={<DeleteAgent />} />
            <Route path="/dashboard/mybooking" element={<MyBooking />} />
            <Route path="/dashboard/givereview" element={<GiveReview />} />
          </Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="registration" element={<Registration />}></Route>

          <Route path="login" element={<Login />}></Route>
          <Route path="registration" element={<Registration />}></Route>

          <Route path="*" element={<Notfound />}></Route>
        </Routes>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
