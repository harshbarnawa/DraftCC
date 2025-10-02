import React, { useState } from 'react';

export default function RegistrationPage() {
  const [selectedType, setSelectedType] = useState('student');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const userTypes = [
    { id: 'student', label: 'Student' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'admin', label: 'Admin' }
  ];

  const handleSubmit = () => {
    console.log('Registration:', { ...formData, userType: selectedType });
    alert(`Registering as ${selectedType}`);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="registration-container">
      <div className="registration-card">
        <h1 className="registration-title">
          Create Account
        </h1>
        <p className="registration-subtitle">
          Register as:
        </p>

        {/* User Type Selection */}
        <div className="user-type-container">
          {userTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`user-type-button ${selectedType === type.id ? 'active' : ''}`}
            >
              <span className="user-type-label">
                {type.label}
              </span>
              <div className="radio-indicator">
                {selectedType === type.id && (
                  <div className="radio-dot" />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Registration Form */}
        <div className="form-container">
          <div className="form-group">
            <label className="form-label">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-input"
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              placeholder="john@example.com"
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-input"
              placeholder="••••••••"
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="form-input"
              placeholder="••••••••"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="submit-button"
          >
            Register
          </button>
        </div>

        <p className="footer-text">
          Already have an account?{' '}
          <span className="footer-link">
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}