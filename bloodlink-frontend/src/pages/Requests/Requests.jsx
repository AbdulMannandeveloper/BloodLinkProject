import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./Requests.css"; // Importing the CSS file

// Sample JSON data
const requestsData = [
  {
    id: 1,
    title: "Urgent Blood Needed",
    username: "Test1",
    date: "2024-12-14",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bloodGroup: "O+",
    hospitalName: "City Hospital",
    city: "Sydney",
    pintsRequired: 3,
    caselocked: false,
    email: "test1@mail.com",
  },
  {
    id: 2,
    title: "Blood Donation Request",
    username: "Test2",
    date: "2024-12-15",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bloodGroup: "A-",
    hospitalName: "General Hospital",
    city: "Melbourne",
    pintsRequired: 2,
    caselocked: false,
    email: "test2@mail.com",
  },
  {
    id: 3,
    title: "Emergency Blood Needed",
    username: "Test3",
    date: "2024-12-13",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bloodGroup: "AB+",
    hospitalName: "Royal Clinic",
    city: "Brisbane",
    pintsRequired: 4,
    caselocked: false,
    email: "test3@mail.com",
  },
];

const Requests = () => {
  const [filters, setFilters] = useState({ bloodGroup: "", date: "" });
  const [filteredRequests, setFilteredRequests] = useState(requestsData);

  const navigate = useNavigate(); // Navigation hook

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Apply filters
  const applyFilters = () => {
    let filtered = requestsData;

    if (filters.bloodGroup) {
      filtered = filtered.filter(
        (request) => request.bloodGroup === filters.bloodGroup
      );
    }

    if (filters.date) {
      filtered = filtered.filter(
        (request) => new Date(request.date) >= new Date(filters.date)
      );
    }

    setFilteredRequests(filtered);
  };

  // Navigate to details page
  const viewDetails = (request) => {
    navigate(`/requests/${request.id}`, { state: { request } });
  };

  return (
    <div className="container">
      <Header />
      <h1 className="title">Blood Requests</h1>

      {/* Filters Section */}
      <div className="filters">
        <label>
          Blood Group:
          <select
            name="bloodGroup"
            value={filters.bloodGroup}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </label>

        <label>
          Date Required:
          <input
            type="date"
            name="date"
            value={filters.date}
            onChange={handleFilterChange}
          />
        </label>

        <button onClick={applyFilters}>Apply Filters</button>
      </div>

      {/* Cards Section */}
      <div>
        {filteredRequests.map((request) => (
          <div key={request.id} className="card">
            <h2 className="card-title">{request.title}</h2>
            <p className="card-text">
              <strong>Date:</strong> {request.date}
            </p>
            <p className="card-text">
              <strong>Name:</strong> {request.username}
            </p>
            <button
              onClick={() => viewDetails(request)}
              className="view-button"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Requests;
