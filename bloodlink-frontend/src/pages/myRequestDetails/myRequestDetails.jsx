import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./MyRequestDetails.css";

const MyRequestDetails = () => {
  const { state } = useLocation();
  const { request } = state || {};
  let [caselocked, setLockCase] = useState(request.caselocked);
  let [pintsRequired, setPintsRequired] = useState(request.pintsRequired);
  if (!request) {
    return <p>Request not found!</p>;
  }

  const handleDecreasePints = () => {
    if (pintsRequired > 0) {
      setPintsRequired -= 1;
      axios
        .put(`http://localhost:7777/Requests/${request.username}`, {
          pintsRequired: pintsRequired,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("No pints left to decrease!");
    }
  };

  const handleLockCase = () => {
    setLockCase(true);
    axios
      .put(`http://localhost:7777/Requests/${request.username}`, {
        caselocked: true,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEmailRedirect = () => {
    const subject = encodeURIComponent(
      `Blood Donation Request: ${request.title}`
    );
    const body = encodeURIComponent(
      `Hello,

I am reaching out regarding the blood donation request:

Title: ${request.title}
Name: ${request.username}
Date: ${new Date(request.date).toLocaleDateString()}
Blood Group: ${request.bloodGroup}
Hospital: ${request.hospitalName}
City: ${request.city}
Pints Required: ${pintsRequired}

Please let me know how I can assist.

Thank you.`
    );
    window.location.href = `mailto:${request.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="request-details-container">
      <Header />
      <h1 className="request-details-title">{request.title}</h1>
      <p className="request-details-item">
        <strong>Date:</strong> {request.date}
      </p>
      <p className="request-details-item">
        <strong>Name:</strong> {request.username}
      </p>
      <p className="request-details-item">
        <strong>Description:</strong> {request.description}
      </p>
      <p className="request-details-item">
        <strong>Blood Group:</strong> {request.bloodGroup}
      </p>
      <p className="request-details-item">
        <strong>Hospital:</strong> {request.hospitalName}
      </p>
      <p className="request-details-item">
        <strong>City:</strong> {request.city}
      </p>
      <p className="request-details-item">
        <strong>Pints Required:</strong> {pintsRequired}
      </p>
      <button className="contact-email-button" onClick={handleEmailRedirect}>
        Contact via Email
      </button>
      <button
        onClick={handleDecreasePints}
        className="decrease-pints-button"
        disabled={caselocked}
      >
        Decrease Pints
      </button>
      <button
        onClick={handleLockCase}
        className="lock-case-button"
        disabled={caselocked}
      >
        Lock Case
      </button>
      {caselocked && (
        <p className="locked-case-message">
          This case is locked and cannot be modified.
        </p>
      )}
      <Footer />
    </div>
  );
};

export default MyRequestDetails;
