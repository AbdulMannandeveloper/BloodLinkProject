import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";

// Import pages from the "pages" folder
import HomePage from "./pages/HomePage/Home_Page.jsx";
import AboutPage from "./pages/About_Us/About_Us.jsx";
import Requests from "./pages/Requests/Requests.jsx";
import Post from "./pages/PostRequest/Post_Request.jsx";
import Login from "./pages/Login/LogIn.jsx";
import SignUp from "./pages/SignUp/Sign_up.jsx";
import RequestDetails from "./pages/RequestDetails/RequestDetails.jsx";
import MyRequestDetails from "./pages/myRequestDetails/myRequestDetails.jsx";
import MyRequests from "./pages/myRequests/myRequests.jsx";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Define routes for each page */}
          <Route path="/" element={<HomePage />} />
          {/*
          <Route path="request" element={<Request />} />
           */}
          <Route path="LogIn" element={<Login />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="requests" element={<Requests />} />
          <Route path="/requests/:id" element={<RequestDetails />} />
          <Route path="Post_Request" element={<Post />} />
          <Route path="myRequests" element={<MyRequests />} />
          <Route path="/myRequests/:id" element={<MyRequestDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
