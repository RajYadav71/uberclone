import React, { useState } from "react";
import "./App.css";

function Verification({ onSubmitSuccess }) {
    const [formData, setFormData] = useState({
        captainName: "",
        captainNumber: "",
        captainEmail: "",
        vehicleNumber: "",
        vehicleMake: "",
        vehicleYear: "",
        vehicleColor: "",
        address: "",
        emergencyContact: "",
        experience: "",
        termsAgreement: false,
        documentAccuracy: false
    });
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);

        // Show success message
        setShowSuccessMessage(true);

        // Call the callback to update parent component
        if (onSubmitSuccess) {
            onSubmitSuccess(formData);
        }

        // Redirect after 2 seconds
        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 2000);
    };

    const handleSaveDraft = () => {
        console.log("Draft saved:", formData);
        alert("Draft saved successfully!");
    };

    return (
        <main className="captain-content">
            {/* Success Message */}
            {showSuccessMessage && (
                <div className="success-message">
                    <div className="success-content">
                        <span className="success-icon">✅</span>
                        <h3>Verification  Successfully!</h3>
                        <p>Your verification form has been submitted. Redirecting to dashboard...</p>
                    </div>
                </div>
            )}

            {/* Document Verification Form */}
            <div className="card document-verification-card">
                <h2>Document Verification</h2>
                <p className="form-description">Complete your profile verification by uploading required documents</p>

                <form className="verification-form" onSubmit={handleSubmit}>
                    {/* Captain Personal Information */}
                    <div className="form-section">
                        <h3 className="section-title">Personal Information</h3>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="captainName">Captain Name *</label>
                                <input
                                    type="text"
                                    id="captainName"
                                    name="captainName"
                                    placeholder="Enter your full name"
                                    value={formData.captainName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="captainNumber">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="captainNumber"
                                    name="captainNumber"
                                    placeholder="+91 9876543210"
                                    value={formData.captainNumber}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="captainEmail">Email Address *</label>
                            <input
                                type="email"
                                id="captainEmail"
                                name="captainEmail"
                                placeholder="captain@example.com"
                                value={formData.captainEmail}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Vehicle Information */}
                    <div className="form-section">
                        <h3 className="section-title">Vehicle Information</h3>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="vehicleNumber">Vehicle Number *</label>
                                <input
                                    type="text"
                                    id="vehicleNumber"
                                    name="vehicleNumber"
                                    placeholder="DL 01 AB 1234"
                                    value={formData.vehicleNumber}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="vehicleMake">Vehicle Make & Model *</label>
                                <input
                                    type="text"
                                    id="vehicleMake"
                                    name="vehicleMake"
                                    placeholder="Maruti Swift Dzire"
                                    value={formData.vehicleMake}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="vehicleYear">Manufacturing Year *</label>
                                <input
                                    type="number"
                                    id="vehicleYear"
                                    name="vehicleYear"
                                    placeholder="2020"
                                    min="2000"
                                    max="2024"
                                    value={formData.vehicleYear}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="vehicleColor">Vehicle Color *</label>
                                <input
                                    type="text"
                                    id="vehicleColor"
                                    name="vehicleColor"
                                    placeholder="White"
                                    value={formData.vehicleColor}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="form-section">
                        <h3 className="section-title">Additional Information</h3>
                        <div className="form-group">
                            <label htmlFor="address">Address *</label>
                            <textarea
                                id="address"
                                name="address"
                                placeholder="Enter your complete address"
                                rows="3"
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="emergencyContact">Emergency Contact *</label>
                                <input
                                    type="tel"
                                    id="emergencyContact"
                                    name="emergencyContact"
                                    placeholder="+91 9876543210"
                                    value={formData.emergencyContact}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="experience">Driving Experience (Years) *</label>
                                <input
                                    type="number"
                                    id="experience"
                                    name="experience"
                                    placeholder="5"
                                    min="1"
                                    max="50"
                                    value={formData.experience}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="form-section">
                        <div className="checkbox-group">
                            <input
                                type="checkbox"
                                id="termsAgreement"
                                name="termsAgreement"
                                checked={formData.termsAgreement}
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="termsAgreement" className="checkbox-label">
                                I agree to the <a href="#" className="terms-link">Terms and Conditions</a> and <a href="#" className="terms-link">Privacy Policy</a> *
                            </label>
                        </div>

                        <div className="checkbox-group">
                            <input
                                type="checkbox"
                                id="documentAccuracy"
                                name="documentAccuracy"
                                checked={formData.documentAccuracy}
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="documentAccuracy" className="checkbox-label">
                                I confirm that all uploaded documents are authentic and accurate *
                            </label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="form-actions">
                        <button type="submit" className="submit-btn">
                            Submit for Verification
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Verification;
