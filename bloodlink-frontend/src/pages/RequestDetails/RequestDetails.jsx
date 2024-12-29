import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./RequestDetails.css";

const RequestDetails = () => {
  const { state } = useLocation();
  const { request } = state || {};

  if (!request) {
    return <p>Request not found!</p>;
  }

  const handleEmailRedirect = () => {
    const subject = encodeURIComponent(`Blood Donation Request: ${request.title}`);
    const body = encodeURIComponent(
      `Hello,

I am reaching out regarding the blood donation request:

Title: ${request.title}
Name: ${request.username}
Date: ${request.date}
Blood Group: ${request.bloodGroup}
Hospital: ${request.hospitalName}
City: ${request.city}
Pints Required: ${request.pintsRequired}

Please let me know how I can assist.

Thank you.`
    );
    window.location.href = `mailto:${request.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="request-details-container">
      <Header />
      <h1 className="request-details-title">{request.title}</h1>
      <p className="request-details-item"><strong>Date:</strong> {request.date}</p>
      <p className="request-details-item"><strong>Name:</strong> {request.username}</p>
      <p className="request-details-item"><strong>Description:</strong> {request.description}</p>
      <p className="request-details-item"><strong>Blood Group:</strong> {request.bloodGroup}</p>
      <p className="request-details-item"><strong>Hospital:</strong> {request.hospitalName}</p>
      <p className="request-details-item"><strong>City:</strong> {request.city}</p>
      <p className="request-details-item"><strong>Pints Required:</strong> {request.pintsRequired}</p>
      <button className="contact-email-button" onClick={handleEmailRedirect}>
        Contact via Email
      </button>
      <Footer />
    </div>
  );
};

export default RequestDetails;
