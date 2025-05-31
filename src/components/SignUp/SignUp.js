import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { SERVER_LOCATION, SIGN_UP } from "../Constants/Server";

const SignUp = () => {
  // Form state
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    repeatPassword: "",
    full_name: "",
    phone_number: "",
    birth_date: "",
  });

  // Password visibility states
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  // Validation errors
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    // Login validation
    if (!formData.login) {
      newErrors.login = "Login is required";
    } else if (!/^(?=.*\d)[a-zA-Z0-9]{4,14}$/.test(formData.login)) {
      newErrors.login =
        "Must be 4-14 alphanumeric characters with at least 1 number";
    } else if (formData.login.length <= 6 || formData.login.length >= 255) {
      newErrors.login = "Must be between 7-254 characters";
    }

    // Password validation - UPDATED LENGTH TO 255
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (
      !/^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{7,}$/.test(formData.password)
    ) {
      newErrors.password =
        "At least 7 characters with 1 uppercase letter and 1 number";
    } else if (formData.password.length > 254) {
      newErrors.password = "Password cannot exceed 254 characters";
    }

    // Repeat password validation
    if (!formData.repeatPassword) {
      newErrors.repeatPassword = "Please repeat your password";
    } else if (formData.repeatPassword !== formData.password) {
      newErrors.repeatPassword = "Passwords do not match";
    }

    // Full name validation
    if (!formData.full_name) {
      newErrors.full_name = "Full name is required";
    } else if (formData.full_name.length >= 255) {
      newErrors.full_name = "Must be less than 255 characters";
    }

    // Phone validation
    const phoneRegex =
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    if (!formData.phone_number) {
      newErrors.phone_number = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone_number)) {
      newErrors.phone_number = "Invalid Russian phone format";
    }

    // Birth date validation
    const dateRegex =
      /((20)[0-9]{2}[-](0[13578]|1[02])[-](0[1-9]|[12][0-9]|3[01]))|((20)[0-9]{2}[-](0[469]|11)[-](0[1-9]|[12][0-9]|30))|((20)[0-9]{2}[-](02)[-](0[1-9]|1[0-9]|2[0-8]))|((((20)(04|08|[2468][048]|[13579][26]))|2000)[-](02)[-]29)/;
    if (!formData.birth_date) {
      newErrors.birth_date = "Birth date is required";
    } else if (!dateRegex.test(formData.birth_date)) {
      newErrors.birth_date = "Use YYYY-MM-DD format";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch(SERVER_LOCATION + SIGN_UP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "User successfully created!",
        });
        // Reset form on success
        setFormData({
          login: "",
          password: "",
          repeatPassword: "",
          full_name: "",
          phone_number: "",
          birth_date: "",
        });
      } else {
        setSubmitStatus({ success: false, message: result.data.message });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Network error. Please try again.",
      });
    }
  };

  return (
    <div className="signup-container">
      <h2>Create Account</h2>

      {submitStatus.message && (
        <div className={`alert ${submitStatus.success ? "success" : "error"}`}>
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Login Field */}
        <div className="form-group">
          <label>Username*</label>
          <input
            type="text"
            name="login"
            value={formData.login}
            onChange={handleChange}
            className={errors.login ? "error-input" : ""}
          />
          {errors.login && <span className="error">{errors.login}</span>}
          <div className="hint">4-14 chars, must contain a number</div>
        </div>

        {/* Password Field */}
        <div className="form-group password-field">
          <label>Password*</label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? "error-input" : ""}
              maxLength={255}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && <span className="error">{errors.password}</span>}
          <div className="hint">
            At least 7 characters with 1 uppercase letter and 1 number
          </div>
          <div className="character-count">
            {formData.password.length}/255 characters
          </div>
        </div>

        {/* Repeat Password */}
        <div className="form-group password-field">
          <label>Repeat Password*</label>
          <div className="password-input-container">
            <input
              type={showRepeatPassword ? "text" : "password"}
              name="repeatPassword"
              value={formData.repeatPassword}
              onChange={handleChange}
              className={errors.repeatPassword ? "error-input" : ""}
              maxLength={255}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowRepeatPassword(!showRepeatPassword)}
              aria-label={
                showRepeatPassword ? "Hide password" : "Show password"
              }
            >
              {showRepeatPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.repeatPassword && (
            <span className="error">{errors.repeatPassword}</span>
          )}
          <div className="character-count">
            {formData.repeatPassword.length}/255 characters
          </div>
        </div>

        {/* Full Name */}
        <div className="form-group">
          <label>Full Name*</label>
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            className={errors.full_name ? "error-input" : ""}
            maxLength={255}
          />
          {errors.full_name && (
            <span className="error">{errors.full_name}</span>
          )}
          <div className="character-count">
            {formData.full_name.length}/255 characters
          </div>
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label>Phone Number*</label>
          <input
            type="tel"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            placeholder="8-917-324-21-21"
            className={errors.phone_number ? "error-input" : ""}
          />
          {errors.phone_number && (
            <span className="error">{errors.phone_number}</span>
          )}
          <div className="hint">Russian phone format</div>
        </div>

        {/* Birth Date */}
        <div className="form-group">
          <label>Birth Date*</label>
          <input
            type="date"
            name="birth_date"
            value={formData.birth_date}
            onChange={handleChange}
            className={errors.birth_date ? "error-input" : ""}
          />
          {errors.birth_date && (
            <span className="error">{errors.birth_date}</span>
          )}
          <div className="hint">Format: YYYY-MM-DD</div>
        </div>

        <button type="submit" className="submit-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
