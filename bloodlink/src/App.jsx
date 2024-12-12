import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

// Import pages from the "pages" folder
import HomePage from './pages/Home_Page.jsx';
import AboutPage from './pages/About_Us';
import Requests from './pages/Requests';
// import Request from './pages/Request_single';
// import Post from './pages/Post_Request';
import Login from './pages/LogIn';
import SignUp from './pages/Sign_up';
import RequestDetails from "./pages/RequestDetails";
// import your_request from './pages/your_Request';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Define routes for each page */}
          <Route path="home" element={<HomePage />} />
          {/* 
          <Route path="request" element={<Request />} />
          <Route path="post_request" element={<Post />} />
          <Route path="your_request" element={<your_request />} /> */}
          <Route path="LogIn" element={<Login />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="requests" element={<Requests />} />
          <Route path="/requests/:id" element={<RequestDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
