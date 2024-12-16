import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const requestsData = [
  {
    id: 1,
    title: "Urgent Blood Needed",
    usernmae: "Test1",
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
    usernmae: "Test2",
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

const MyRequestDetails = () => {
  const { id } = useParams();
  const [requests, setRequests] = useState(requestsData);
  const requestIndex = requests.findIndex((req) => req.id === parseInt(id));
  const request = requests[requestIndex];

  if (!request) {
    return <p>Request not found!</p>;
  }

  // Decrease pints handler
  const handleDecreasePints = () => {
    if (request.pintsRequired > 0) {
      const updatedRequests = [...requests];
      updatedRequests[requestIndex].pintsRequired -= 1;
      setRequests(updatedRequests);
    } else {
      alert("No pints left to decrease!");
    }
  };

  // Lock case handler
  const handleLockCase = () => {
    const updatedRequests = [...requests];
    updatedRequests[requestIndex].caselocked = true;
    setRequests(updatedRequests);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Header />
      <h1>{request.title}</h1>
      <p>
        <strong>Date:</strong> {request.date}
      </p>
      <p>
        <strong>Name:</strong> {request.usernmae}
      </p>
      <p>
        <strong>Description:</strong> {request.description}
      </p>
      <p>
        <strong>Blood Group:</strong> {request.bloodGroup}
      </p>
      <p>
        <strong>Hospital:</strong> {request.hospitalName}
      </p>
      <p>
        <strong>City:</strong> {request.city}
      </p>
      <p>
        <strong>Pints Required:</strong> {request.pintsRequired}
      </p>
      <p>
        <strong>Case Locked:</strong> {request.caselocked ? "Yes" : "No"}
      </p>

      {/* Decrease Pints Button */}
      <button
        onClick={handleDecreasePints}
        style={{ margin: "10px", padding: "10px", backgroundColor: "#f39c12", color: "white", border: "none", borderRadius: "5px" }}
        disabled={request.caselocked}
      >
        Decrease Pints
      </button>

      {/* Lock Case Button */}
      <button
        onClick={handleLockCase}
        style={{ margin: "10px", padding: "10px", backgroundColor: "#e74c3c", color: "white", border: "none", borderRadius: "5px" }}
        disabled={request.caselocked}
      >
        Lock Case
      </button>

      {request.caselocked && (
        <p style={{ color: "red", fontWeight: "bold" }}>
          This case is locked and cannot be modified.
        </p>
      )}

      <Footer />
    </div>
  );
};

export default MyRequestDetails;
