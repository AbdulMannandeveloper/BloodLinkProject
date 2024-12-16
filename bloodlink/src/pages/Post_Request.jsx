import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


function Post_Request() {
  const [formData, setFormData] = useState({
    bloodGroup: '',
    totalPints: '',
    hospitalName: '',
    description: '',
    city: '',
    dateRequired: '',
    agreeLegalAction: false,
    agreeEthicalRequest: false,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.bloodGroup) newErrors.bloodGroup = 'Blood group is required';
    if (!formData.totalPints || isNaN(formData.totalPints)) newErrors.totalPints = 'Total pints must be a valid number';
    if (!formData.hospitalName) newErrors.hospitalName = 'Hospital name is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.dateRequired) newErrors.dateRequired = 'Date is required';
    if (!formData.agreeLegalAction) newErrors.agreeLegalAction = 'You must agree to the legal action clause';
    if (!formData.agreeEthicalRequest) newErrors.agreeEthicalRequest = 'You must confirm ethical responsibility';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Blood donation request submitted successfully!');
      console.log(formData);
      setFormData({
        bloodGroup: '',
        totalPints: '',
        hospitalName: '',
        description: '',
        city: '',
        dateRequired: '',
        agreeLegalAction: false,
        agreeEthicalRequest: false,
      });
    }
  };

  return (
    <div className="form-container">
    <Header/>
      <h2>Post Blood Donation Request</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bloodGroup">Blood Group Required</label>
          <input
            type="text"
            id="bloodGroup"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleInputChange}
            placeholder="Enter blood group (e.g., A+, O-)"
          />
          {errors.bloodGroup && <p className="error">{errors.bloodGroup}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="totalPints">Total Pints Required</label>
          <input
            type="number"
            id="totalPints"
            name="totalPints"
            value={formData.totalPints}
            onChange={handleInputChange}
            placeholder="Enter the number of pints required"
          />
          {errors.totalPints && <p className="error">{errors.totalPints}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="hospitalName">Hospital Name</label>
          <input
            type="text"
            id="hospitalName"
            name="hospitalName"
            value={formData.hospitalName}
            onChange={handleInputChange}
            placeholder="Enter hospital name"
          />
          {errors.hospitalName && <p className="error">{errors.hospitalName}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description of Case</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Provide details about the case"
          />
          {errors.description && <p className="error">{errors.description}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            placeholder="Enter the city where blood is needed"
          />
          {errors.city && <p className="error">{errors.city}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="dateRequired">Date When Required</label>
          <input
            type="date"
            id="dateRequired"
            name="dateRequired"
            value={formData.dateRequired}
            onChange={handleInputChange}
          />
          {errors.dateRequired && <p className="error">{errors.dateRequired}</p>}
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="agreeLegalAction"
              checked={formData.agreeLegalAction}
              onChange={handleInputChange}
            />
            I confirm that I will face legal actions for submitting any illegal or false requests.
          </label>
          {errors.agreeLegalAction && <p className="error">{errors.agreeLegalAction}</p>}
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="agreeEthicalRequest"
              checked={formData.agreeEthicalRequest}
              onChange={handleInputChange}
            />
            I confirm that this request is ethical and necessary.
          </label>
          {errors.agreeEthicalRequest && <p className="error">{errors.agreeEthicalRequest}</p>}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit Request
        </button>
      </form>
    <Footer/>
    </div>
  );
}

export default Post_Request;
