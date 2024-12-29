import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./myRequests.css"; // Import the CSS file

const MyRequests = () => {
  const [filters, setFilters] = useState({ bloodGroup: "", date: "" });
  const [requests, setRequests] = useState([]); // State to store all requests
  const [filteredRequests, setFilteredRequests] = useState([]); // State to store filtered requests
  const currentUsername = localStorage.getItem("name");

  const navigate = useNavigate(); // Navigation hook

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        await axios
          .get(`http://localhost:7777/Requests/${currentUsername}`)
          .then((response) => {
            console.log(response.data);
            setRequests(response.data.requests);
            setFilteredRequests(response.data.requests); // Initially display all requests
          });
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };

    fetchRequests();
  }, [currentUsername]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const applyFilters = () => {
    let filtered = requests;

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
    navigate(`/myRequests/${request.title}`, { state: { request } });
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
            className="select"
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
            className="input"
          />
        </label>

        <button onClick={applyFilters} className="button">
          Apply Filters
        </button>
      </div>

      <div>
        {filteredRequests.map((request) => (
          <div key={request.id} className="card">
            <h2 className="cardTitle">{request.title}</h2>
            <p className="cardText">
              <strong>Date:</strong>{" "}
              {new Date(request.date).toLocaleDateString()}
            </p>
            <p className="cardText">
              <strong>Name:</strong> {request.username}
            </p>
            <p className="cardText">
              <strong>Description:</strong>{" "}
              {request.description.split(" ").slice(0, 40).join(" ")}...
            </p>
            <p className="cardText">
              <strong>Blood Group:</strong> {request.bloodGroup}
            </p>
            <p className="cardText">
              <strong>Hospital:</strong> {request.hospitalName}
            </p>
            <p className="cardText">
              <strong>City:</strong> {request.city}
            </p>
            <p className="cardText">
              <strong>Pints Required:</strong> {request.pintsRequired}
            </p>
            <button onClick={() => viewDetails(request)} className="viewButton">
              View Details
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MyRequests;
