import "../App.css";
import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { useEffect } from "react";

const Form = ({ active, setActive }) => {
  // const context = useAuth();
  const [formData, setFormData] = useState({
    name: (JSON.parse(sessionStorage.getItem("user")) || {}).username || "",
    phone: "",
    date: "",
    comment: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Имя обязательно для заполнения";
        if (value.length < 2) return "Имя должно содержать минимум 2 символа";
        return "";
      case "phone":
        if (!value.trim()) return "Телефон обязателен для заполнения";
        if (
          !/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(
            value
          )
        ) {
          return "Введите корректный номер телефона";
        }
        return "";
      case "date":
        if (!value.trim()) return "Дата обязательна для заполнения";
        const selectedDate = new Date(value);
        const today = new Date();
        if (selectedDate < today) return "Дата не может быть в прошлом";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Валидация всех полей
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Здесь можно добавить отправку данных на сервер
      alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
      setActive(false);
      setFormData({
        name: "",
        phone: "",
        date: "",
        comment: "",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div className={`form ${active ? "active" : ""}`}>
      <div className={`form_content ${active ? "active" : ""}`}>
        <button
          className="form_close"
          onClick={() => setActive(false)}
        ></button>
        <h2 className="title">Записаться на сеанс</h2>
        <p className="subtitle">Заполните форму, и мы свяжемся с вами</p>

        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              name="name"
              // defaultValue={context.username}
              className={`input ${errors.name ? "input-error" : ""}`}
              placeholder=" "
              value={formData.name}
              onChange={handleChange}
            />
            <span className="placeholder">Ваше имя</span>
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>

          <div className="input-container">
            <input
              type="tel"
              name="phone"
              className={`input ${errors.phone ? "input-error" : ""}`}
              placeholder=" "
              value={formData.phone}
              onChange={handleChange}
            />
            <span className="placeholder">Номер телефона</span>
            {errors.phone && (
              <span className="error-message">{errors.phone}</span>
            )}
          </div>

          <div className="input-container">
            <input
              type="date"
              name="date"
              className={`input ${errors.date ? "input-error" : ""}`}
              placeholder=" "
              value={formData.date}
              onChange={handleChange}
            />
            <span className="placeholder">Желаемая дата</span>
            {errors.date && (
              <span className="error-message">{errors.date}</span>
            )}
          </div>

          <div className="input-container">
            <input
              type="text"
              name="comment"
              className="input"
              placeholder=" "
              value={formData.comment}
              onChange={handleChange}
            />
            <span className="placeholder">Комментарий</span>
          </div>

          <button
            type="submit"
            className={`submit ${isSubmitting ? "submitting" : ""}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Отправка..." : "Отправить"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
