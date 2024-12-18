import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import Header from "../Components/Header";
import Footer from "../Components/Footer";

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
  const viewDetails = (id) => {
    navigate(`/requests/${id}`);
  };

  return (
    <div style={styles.container}>
      <Header />

      <h1 style={styles.title}>Blood Requests</h1>

      {/* Filters Section */}
      <div style={styles.filters}>
        <label>
          Blood Group:
          <select
            name="bloodGroup"
            value={filters.bloodGroup}
            onChange={handleFilterChange}
            style={styles.select}
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
            style={styles.input}
          />
        </label>

        <button onClick={applyFilters} style={styles.button}>
          Apply Filters
        </button>
      </div>

      {/* Cards Section */}
      <div>
        {filteredRequests.map((request) => (
          <div key={request.id} style={styles.card}>
            <h2 style={styles.cardTitle}>{request.title}</h2>
            <p style={styles.cardText}>
              <strong>Date:</strong> {request.date}
            </p>
            <p style={styles.cardText}>
              <strong>Name:</strong> {request.username}
            </p>
            <p style={styles.cardText}>
              <strong>Description:</strong>{" "}
              {request.description.split(" ").slice(0, 40).join(" ")}...
            </p>
            <p style={styles.cardText}>
              <strong>Blood Group:</strong> {request.bloodGroup}
            </p>
            <p style={styles.cardText}>
              <strong>Hospital:</strong> {request.hospitalName}
            </p>
            <p style={styles.cardText}>
              <strong>City:</strong> {request.city}
            </p>
            <p style={styles.cardText}>
              <strong>Pints Required:</strong> {request.pintsRequired}
            </p>
            <button
              onClick={() => viewDetails(request.id)}
              style={styles.viewButton}
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

const styles = {
  container: {
    padding: "20px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  filters: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "20px",
  },
  select: {
    padding: "5px",
    marginLeft: "5px",
  },
  input: {
    padding: "5px",
    marginLeft: "5px",
  },
  button: {
    padding: "5px 10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  card: {
    width: "100%",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  },
  cardTitle: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  cardText: {
    margin: "5px 0",
  },
  viewButton: {
    padding: "5px 10px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default Requests;
