import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./Requests.css"; // Importing the CSS file

const Requests = () => {
  const [requestsData, setRequestsData] = useState([]);
  const [filters, setFilters] = useState({ bloodGroup: "", date: "" });
  const [filteredRequests, setFilteredRequests] = useState([]);

  const navigate = useNavigate(); // Navigation hook

  useEffect(() => {
    axios.get("http://localhost:7777/Requests").then((response) => {
      console.log(response.data.requests);
      setRequestsData(response.data.requests);
      setFilteredRequests(response.data.requests); // Set initial filtered requests
    });
  }, []);

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

  const viewDetails = (request) => {
    navigate(`/Requests/${request.title}`, { state: { request } });
  };

  return (
    <div className="container">
      <Header />
      <h1 className="title">Blood Requests</h1>

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

      <div>
        {filteredRequests.map((request) => (
          <div key={request.id} className="card">
            <h2 className="card-title">{request.title}</h2>
            <p className="card-text">
              <strong>Date:</strong> {new Date(request.date).toLocaleDateString()}
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
