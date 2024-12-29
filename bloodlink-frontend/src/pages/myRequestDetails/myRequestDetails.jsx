import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./MyRequestDetails.css"; // Importing the CSS file

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
    <div>
      <Header />
      <div className="request-details-container">
        <h1>{request.title}</h1>
        <p>
          <strong>Date:</strong> {request.date}
        </p>
        <p>
          <strong>Name:</strong> {request.username}
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
          className="decrease-pints-button"
          disabled={request.caselocked}
        >
          Decrease Pints
        </button>

        {/* Lock Case Button */}
        <button
          onClick={handleLockCase}
          className="lock-case-button"
          disabled={request.caselocked}
        >
          Lock Case
        </button>

        {request.caselocked && (
          <p className="locked-case-message">
            This case is locked and cannot be modified.
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyRequestDetails;
