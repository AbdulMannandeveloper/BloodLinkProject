import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

// Import pages from the "pages" folder
import HomePage from './pages/Home_Page.jsx';
import AboutPage from './pages/About_Us';
import Requests from './pages/Requests';
import Post from './pages/Post_Request';
import Login from './pages/LogIn';
import SignUp from './pages/Sign_up';
import RequestDetails from "./pages/RequestDetails";
import MyRequestDetails from "./pages/myRequestDetails";
import MyRequests from './pages/myRequests';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Define routes for each page */}
          <Route path="home" element={<HomePage />} />
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
