import React from "react";
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
  
const RequestDetails = () => {
  const { id } = useParams();
  const request = requestsData.find((req) => req.id === parseInt(id));

  if (!request) {
    return <p>Request not found!</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <Header />
      <h1>{request.title}</h1>
      <p><strong>Date:</strong> {request.date}</p>
      <p><strong>Name:</strong> {request.usernmae}</p>
      <p><strong>Description:</strong> {request.description}</p>
      <p><strong>Blood Group:</strong> {request.bloodGroup}</p>
      <p><strong>Hospital:</strong> {request.hospitalName}</p>
      <p><strong>City:</strong> {request.city}</p>
      <p><strong>Pints Required:</strong> {request.pintsRequired}</p>
      <Footer />
    </div>
  );
};

export default RequestDetails;
